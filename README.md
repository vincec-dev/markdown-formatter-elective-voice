# Healthcare Document Formatter

A professional single-page web application that transforms messy healthcare documents into clean, AI-optimized markdown format perfect for voice agents.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 🎯 Overview

This tool helps healthcare businesses format their documents (PDF, Word, TXT) into clean, structured markdown optimized for AI voice agents. Upload your messy documents and get back beautifully formatted, voice-friendly content.

### ✨ Key Features

- **Multi-Format Support**: Upload PDF, Word (.docx, .doc), or TXT files
- **AI-Powered Formatting**: Uses Claude AI (Sonnet 4) for intelligent document restructuring
- **Dual Preview**: View formatted preview and raw markdown side-by-side
- **Easy Export**: Download as .md or copy to clipboard
- **Professional UI**: Clean, healthcare-themed design
- **Fully Responsive**: Works on desktop, tablet, and mobile
- **Secure**: API keys stored locally in browser only
- **No Backend Required**: Runs entirely in the browser

## 🚀 Quick Start

### Option 1: Use Directly (Fastest)

1. Download `index.html`
2. Double-click to open in your browser
3. Click "⚙️ API Settings" and add your Anthropic API key
4. Start formatting documents!

### Option 2: Deploy to GitHub Pages (Recommended)

1. **Create a GitHub repository**
   ```bash
   git clone <your-repo-url>
   cd your-repo-name
   ```

2. **Add the file**
   - Copy `index.html` to your repository

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select your branch (usually `main`)
   - Click Save
   - Your app will be live at: `https://username.github.io/repo-name/`

### Option 3: Deploy to Netlify

1. Create a free account at [netlify.com](https://netlify.com)
2. Drag and drop the `index.html` file
3. Instant deployment! ✨

## 🔑 Getting Your API Key

1. Visit [Anthropic Console](https://console.anthropic.com/)
2. Sign up or log in
3. Navigate to API Keys section
4. Click "Create Key"
5. Copy your key (starts with `sk-ant-`)
6. Paste it in the app's Settings (⚙️ button)

**Important**: Keep your API key secure. Never share it or commit it to version control.

## 📖 How to Use

1. **Configure API Key**
   - Click the "⚙️ API Settings" button
   - Paste your Anthropic API key
   - Click "Save API Key"

2. **Fill in Details**
   - Enter your practice/business name
   - Add your email address
   - Select the document type from dropdown

3. **Upload Document**
   - Click the upload area or drag & drop your file
   - Supported formats: PDF, Word (.docx, .doc), TXT
   - Max file size: 10MB

4. **Format**
   - Click "🚀 Format Document"
   - Wait for processing (typically 10-30 seconds)
   - View your formatted document!

5. **Export**
   - Download as Markdown file
   - Copy to clipboard
   - Upload another document

## 📋 Supported Document Types

The app is pre-configured for common healthcare document types:

- Services & Procedures
- Pricing Information
- Pre-Procedure Instructions
- Post-Procedure Care
- FAQs
- Policies
- General Information
- Other

## 🎨 Customization

### Change Colors

Edit the CSS variables in the `<style>` section:

```css
:root {
    --primary-color: #4CAF50;      /* Main action color (green) */
    --secondary-color: #2196F3;     /* Secondary elements (blue) */
    --background: #f5f5f5;          /* Page background */
}
```

### Modify Formatting Prompt

Edit `CONFIG.SYSTEM_PROMPT` in the JavaScript section to customize how Claude formats your documents.

### Add Document Types

Add more options to the `<select id="documentType">` dropdown:

```html
<option value="Your Type">Your Type</option>
```

## 🛠️ Technical Details

### Built With

- **Vanilla JavaScript** (ES6+) - No frameworks needed
- **PDF.js** - PDF text extraction
- **Mammoth.js** - Word document conversion
- **Marked.js** - Markdown rendering
- **Highlight.js** - Code syntax highlighting
- **Claude API** - AI-powered formatting

### Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome  | ✅ Full |
| Firefox | ✅ Full |
| Safari  | ✅ Full |
| Edge    | ✅ Full |
| Mobile  | ✅ Responsive |

### API Usage & Costs

Claude API pricing (approximate):
- **Input**: ~$3 per million tokens
- **Output**: ~$15 per million tokens
- **Average document**: $0.01 - $0.05 per document
- **100 documents**: ~$1-5 total cost

Most healthcare documents cost less than $0.05 to format.

## 🔒 Security & Privacy

- API keys are stored in browser `localStorage` only
- Keys never leave your device except to call Claude API
- No data is sent to any third-party servers
- Documents are processed client-side
- For production use with multiple users, consider implementing a backend proxy

## 🐛 Troubleshooting

### "API key not configured"
**Solution**: Click "⚙️ API Settings" and add your Anthropic API key

### "Failed to extract text from document"
**Possible causes**:
- File may be corrupted
- PDF might be image-based (scanned document)
- Word document has unsupported formatting

**Solution**: Try converting to plain text first, or use OCR for scanned PDFs

### "Rate limit exceeded"
**Solution**: Wait 30-60 seconds before trying again. Consider upgrading your API plan for higher limits.

### PDF extraction fails
**Solution**: Some PDFs are image-based and don't contain extractable text. Use an OCR tool first, or re-save the PDF with text.

### File too large error
**Solution**: The maximum file size is 10MB. Split large documents or compress the file.

## 📊 Features Checklist

- ✅ Upload PDF, Word, TXT files
- ✅ Automatic text extraction
- ✅ Claude AI formatting
- ✅ Live preview (formatted + raw)
- ✅ Download as .md file
- ✅ Copy to clipboard
- ✅ Responsive mobile design
- ✅ Error handling & validation
- ✅ Progress indicators
- ✅ Document statistics
- ✅ Drag & drop upload
- ✅ API key management
- ✅ Before-unload protection

## 🚦 Roadmap

Potential future enhancements:

- [ ] Dropbox integration
- [ ] Dark mode toggle
- [ ] Document history (last 5 formatted)
- [ ] Export as PDF
- [ ] Side-by-side comparison view
- [ ] Batch processing
- [ ] Custom prompt templates
- [ ] Cost calculator
- [ ] Multi-language support

## 📝 Example Use Cases

1. **Dental Practice**: Format procedure information for voice-enabled booking system
2. **Medical Clinic**: Convert policy documents for AI receptionist
3. **Healthcare Provider**: Structure FAQs for voice assistant integration
4. **Insurance Office**: Format coverage details for voice query system

## 🤝 Contributing

This is a standalone project, but feel free to:
- Fork and customize for your needs
- Report issues
- Suggest improvements
- Share your customizations

## 📄 License

MIT License - Free to use and modify for your healthcare practice.

## 🙋 Support

For issues with:
- **This application**: Check browser console (F12) for errors
- **Claude API**: Visit [Anthropic Documentation](https://docs.anthropic.com/)
- **File extraction**: Verify file format compatibility

## 🌟 Credits

Built with ❤️ for healthcare professionals.

Powered by:
- [Anthropic Claude](https://www.anthropic.com/) - AI formatting
- [PDF.js](https://mozilla.github.io/pdf.js/) - PDF processing
- [Mammoth.js](https://github.com/mwilliamson/mammoth.js) - Word conversion
- [Marked.js](https://marked.js.org/) - Markdown rendering

---

**Ready to transform your healthcare documents?** Just open `index.html` and start formatting! 🚀
