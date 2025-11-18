# Proxy Server Setup Guide

## Why Do I Need a Proxy?

If you're getting **"Network error"** or **CORS errors** when using the Healthcare Document Formatter, you need a proxy server. This is due to browser security policies that block direct API calls from web applications.

## What Does the Proxy Do?

The proxy server (`proxy-server.js`) acts as a middleman:
1. Your web app sends requests to the proxy
2. The proxy forwards them to Anthropic API
3. Anthropic responds to the proxy
4. The proxy sends the response back to your app

This avoids CORS issues while keeping your API key secure.

## Quick Setup (5 minutes)

### Step 1: Install Dependencies

```bash
cd markdown-formatter-elective-voice
npm install
```

### Step 2: Start the Proxy Server

```bash
npm start
```

You should see:
```
Proxy server running on port 3000
Health check: http://localhost:3000/health
Format endpoint: http://localhost:3000/api/format
```

### Step 3: Configure the App

Open `index.html` and find the `CONFIG` object (around line 991):

```javascript
const CONFIG = {
    // ... other settings ...

    // UNCOMMENT THIS LINE:
    PROXY_ENDPOINT: 'http://localhost:3000/api/format',

    // ... more settings ...
};
```

Save the file.

### Step 4: Test It

1. Open `index.html` in your browser
2. Upload a test document
3. Click "Format Document"
4. It should work now! ✅

## Deploying to Production

For production use (so others can access your app), deploy the proxy to a cloud service:

### Option 1: Vercel (Recommended, Free)

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow the prompts**:
   - "Set up and deploy?" → Yes
   - "Which scope?" → Your account
   - "Link to existing project?" → No
   - "Project name?" → Press Enter (use default)
   - "Directory?" → Press Enter (current directory)
   - Wait for deployment...

4. **Copy the deployment URL** (e.g., `https://your-app.vercel.app`)

5. **Update index.html**:
   ```javascript
   PROXY_ENDPOINT: 'https://your-app.vercel.app/api/format',
   ```

6. **Redeploy your static site** (Netlify, GitHub Pages, etc.) with the updated index.html

### Option 2: Railway (Free Tier)

1. Create account at [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Connect your GitHub account
4. Select this repository
5. Railway auto-detects Node.js and deploys
6. Click on your deployment → "Settings" → "Generate Domain"
7. Copy the public URL
8. Update `PROXY_ENDPOINT` in index.html to:
   ```javascript
   PROXY_ENDPOINT: 'https://your-app.up.railway.app/api/format',
   ```

### Option 3: Render (Free Tier)

1. Create account at [render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repo
4. Configure:
   - **Name**: healthcare-formatter-proxy
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free
5. Click "Create Web Service"
6. Wait for deployment
7. Copy the service URL (e.g., `https://healthcare-formatter-proxy.onrender.com`)
8. Update `PROXY_ENDPOINT` in index.html to:
   ```javascript
   PROXY_ENDPOINT: 'https://healthcare-formatter-proxy.onrender.com/api/format',
   ```

## Testing the Proxy

### Test Locally

1. **Health Check**:
   ```bash
   curl http://localhost:3000/health
   ```

   Should return:
   ```json
   {"status":"ok","timestamp":"2024-..."}
   ```

2. **Test Format Endpoint** (replace YOUR_API_KEY):
   ```bash
   curl -X POST http://localhost:3000/api/format \
     -H "Content-Type: application/json" \
     -d '{
       "apiKey": "sk-ant-YOUR_API_KEY",
       "text": "Test document content",
       "practiceName": "Test Practice",
       "documentType": "General Information",
       "systemPrompt": "Format this document.",
       "model": "claude-sonnet-4-20250514",
       "maxTokens": 1000
     }'
   ```

### Test Production Deployment

Replace `localhost:3000` with your deployed URL in the curl commands above.

## Troubleshooting

### "Cannot find module 'express'"
**Solution**: Run `npm install`

### "Port 3000 is already in use"
**Solution**: Stop other services on port 3000, or change the port:
```bash
PORT=3001 npm start
```
Then update `PROXY_ENDPOINT` to use port 3001.

### Proxy works locally but not in production
**Causes**:
- Firewall blocking the proxy
- Incorrect URL in PROXY_ENDPOINT
- Deployment service is sleeping (free tiers often sleep after inactivity)

**Solution**:
- Verify the proxy URL in your browser
- Check deployment service logs
- Wake up the service by visiting the health check URL

### CORS errors even with proxy
**Cause**: You may have configured the wrong proxy URL

**Solution**:
1. Check that PROXY_ENDPOINT in CONFIG exactly matches your deployed proxy URL
2. Make sure the URL ends with `/api/format`
3. Test the health check endpoint first

## Security Considerations

### For Development
- The proxy forwards your API key from the browser
- Fine for personal use or trusted users
- API key is still in browser localStorage

### For Production with Multiple Users
Consider these enhancements:

1. **Server-side API key storage**: Store the API key on the server (not in the browser)
2. **Authentication**: Add user authentication to the proxy
3. **Rate limiting**: Prevent abuse with rate limiting
4. **Usage tracking**: Monitor API usage per user
5. **API key rotation**: Regularly rotate your Anthropic API key

### Basic Rate Limiting (Optional)

Add this to `proxy-server.js` after line 7:

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api', limiter);
```

Then install:
```bash
npm install express-rate-limit
```

## Cost Tracking

Monitor your Anthropic API usage at: https://console.anthropic.com/

Each request through the proxy counts toward your API quota.

## Need Help?

- Check proxy logs in your terminal
- Verify the health endpoint works
- Review browser console (F12) for errors
- Create an issue on GitHub with error details

---

**Ready to use?** Start the proxy with `npm start` and update your CONFIG! 🚀
