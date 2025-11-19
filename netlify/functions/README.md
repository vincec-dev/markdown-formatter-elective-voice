# Netlify Functions - CORS Proxy

This directory contains Netlify Functions that act as a proxy to avoid CORS issues when calling the Anthropic API from the browser.

## How It Works

When you deploy to Netlify:
1. Your static files (index.html) are served
2. API calls go to `/.netlify/functions/format`
3. The Netlify Function forwards requests to Anthropic API
4. No CORS issues! ✅

## Deployment

### Automatic (Recommended)

If your Netlify site is connected to this GitHub repository:
1. Push your changes to the repository
2. Netlify automatically detects the `netlify.toml` file
3. Netlify builds and deploys your functions
4. Done! Your app now works without CORS errors

### Manual Deployment

1. Go to your Netlify dashboard
2. Drag and drop the entire project folder
3. Netlify will detect `netlify.toml` and deploy functions automatically

## Testing Locally

To test Netlify Functions locally, install the Netlify CLI:

```bash
npm install -g netlify-cli

# Run local dev server with functions
netlify dev
```

This will start a local server at `http://localhost:8888` with functions enabled.

## Function Endpoint

- **Production**: `https://your-site.netlify.app/.netlify/functions/format`
- **Local**: `http://localhost:8888/.netlify/functions/format`

The application is already configured to use `/.netlify/functions/format` which works in both environments.

## Configuration

The function is configured in `netlify.toml`:
- Functions directory: `netlify/functions`
- Redirect from `/api/*` to `/.netlify/functions/*`

## Security

- API keys are sent from the browser to the function
- The function forwards requests to Anthropic
- For production with multiple users, consider adding:
  - Rate limiting
  - Authentication
  - Server-side API key storage

## Troubleshooting

### Functions not working after deployment

1. Check Netlify deploy logs for errors
2. Verify `netlify.toml` is in the root directory
3. Ensure `netlify/functions` directory exists
4. Check function logs in Netlify dashboard

### "Function not found" error

- Make sure you've deployed the latest version
- Check that the function file is named `format.js`
- Verify the endpoint URL is `/.netlify/functions/format`

### CORS errors still occurring

- Check browser console for the actual endpoint being called
- Verify `PROXY_ENDPOINT` in index.html is set correctly
- Test the function directly: `curl https://your-site.netlify.app/.netlify/functions/format`

## Costs

Netlify Functions free tier includes:
- 125,000 requests per month
- 100 hours of runtime per month

This is more than enough for personal use or small teams.

For higher usage, see [Netlify pricing](https://www.netlify.com/pricing/).
