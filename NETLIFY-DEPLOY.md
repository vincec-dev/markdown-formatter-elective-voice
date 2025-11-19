# 🚀 Netlify Deployment Guide - CORS-Free Solution!

Your app is now **fully configured** to work on Netlify without any CORS issues! Just follow these simple steps.

## ✅ What's Already Done

I've set everything up for you:
- ✅ Created Netlify Functions to bypass CORS
- ✅ Configured `netlify.toml` for automatic deployment
- ✅ Updated `index.html` to use the function endpoint
- ✅ Added all necessary files to your repository

## 🎯 Deploy in 3 Steps (2 minutes)

### Step 1: Go to Netlify

Visit [netlify.com](https://netlify.com) and sign in (or create a free account)

### Step 2: Connect Your Repository

Click **"Add new site"** → **"Import an existing project"**

Choose: **"Deploy with GitHub"**
- Authorize Netlify to access your GitHub
- Select repository: `vincec-dev/markdown-formatter-elective-voice`
- Branch: `claude/healthcare-doc-formatter-01QxB6ryiURXSj6uhBhNvf4S`

### Step 3: Deploy!

Click **"Deploy site"**

That's it! Netlify will:
1. Detect `netlify.toml` automatically ✅
2. Deploy your static files (index.html) ✅
3. Build and deploy the serverless function ✅
4. Give you a live URL (e.g., `https://your-site-name.netlify.app`) ✅

## 🧪 Test Your Deployment

1. **Visit your Netlify URL**
2. **Open browser console** (F12)
3. **Click "⚙️ API Settings"** and add your Anthropic API key
4. **Upload a test document** (use `sample-test-document.txt` from the repo)
5. **Click "Format Document"**

You should see in the console:
```
Making API request to: /.netlify/functions/format
Using proxy: true
Using model: claude-sonnet-4-20250514
Response status: 200
```

**No more CORS errors!** 🎉

## 📊 What Happens Behind the Scenes

```
Browser (your site)
    ↓ (makes request to same domain - no CORS!)
/.netlify/functions/format
    ↓ (forwards to Anthropic - server-to-server)
Anthropic API
    ↓ (returns formatted document)
/.netlify/functions/format
    ↓ (sends back to browser with CORS headers)
Browser (displays formatted doc)
```

## 🔄 Future Updates

Every time you push to your GitHub repository:
1. Netlify automatically detects changes
2. Redeploys your site and functions
3. Your site is updated!

No manual deployment needed.

## 💰 Costs

**Completely FREE** for your use case!

Netlify Free Tier includes:
- **100 GB bandwidth/month**
- **125,000 function requests/month**
- **100 hours function runtime/month**

Even if you process 1,000 documents per month, you'll use less than 1% of the free tier.

## 🛠️ Advanced: Custom Domain (Optional)

Want to use your own domain (e.g., `formatter.yourpractice.com`)?

1. Go to Netlify dashboard → **Domain settings**
2. Click **"Add custom domain"**
3. Follow the DNS setup instructions
4. Netlify provides free SSL certificates automatically!

## 🐛 Troubleshooting

### "Function invocation failed"

**Check Netlify Function Logs:**
1. Go to Netlify dashboard
2. Click on your site
3. Go to **Functions** tab
4. Click on `format` function
5. View logs for errors

**Common causes:**
- API key not set (check Settings in the app)
- Network timeout (Anthropic API might be slow)
- Invalid request format

### "Site deployed but still getting CORS errors"

**Make sure you deployed the ENTIRE repository:**
- Not just `index.html`
- Must include `netlify.toml` and `netlify/` folder
- If you manually uploaded, upload the whole folder
- Better: Connect to GitHub for automatic full deployment

### Function not found (404)

**Verify deployment:**
1. Check Netlify deploy logs
2. Look for: "Deploying functions from directory: netlify/functions"
3. Verify `format` function appears in Functions tab

**Test function directly:**
```bash
curl https://your-site.netlify.app/.netlify/functions/format
```

Should return an error about missing fields (which is expected - means it's working!)

### Still having issues?

1. Check browser console (F12) for detailed errors
2. Review Netlify function logs
3. Try redeploying: Netlify dashboard → **Deploys** → **Trigger deploy** → **Clear cache and deploy site**
4. Create an issue on GitHub with error details

## 📚 Additional Resources

- [Netlify Functions Documentation](https://docs.netlify.com/functions/overview/)
- [Netlify Deployment Guide](https://docs.netlify.com/site-deploys/overview/)
- [Anthropic API Documentation](https://docs.anthropic.com/)

## ✨ You're All Set!

Your healthcare document formatter is ready to deploy. No CORS issues, no complex setup, just pure functionality.

**Next Steps:**
1. Deploy to Netlify (3 minutes)
2. Add your API key (1 minute)
3. Start formatting documents! 🚀

---

Questions? Check the main [README.md](./README.md) or create an issue on GitHub.
