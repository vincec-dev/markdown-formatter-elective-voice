// Simple Node.js/Express proxy server to avoid CORS issues
// This allows the browser app to call the Anthropic API without CORS restrictions

const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all origins (adjust for production)
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Proxy endpoint
app.post('/api/format', async (req, res) => {
    try {
        const { apiKey, text, practiceName, documentType, systemPrompt, model, maxTokens } = req.body;

        if (!apiKey) {
            return res.status(400).json({ error: 'API key is required' });
        }

        if (!text) {
            return res.status(400).json({ error: 'Text is required' });
        }

        const userPrompt = `Practice Name: ${practiceName}
Document Type: ${documentType}

Document Text:
${text}`;

        // Call Anthropic API
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: model || 'claude-sonnet-4-20250514',
                max_tokens: maxTokens || 4000,
                system: systemPrompt,
                messages: [{
                    role: 'user',
                    content: userPrompt
                }]
            })
        });

        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json(data);
        }

        res.json(data);
    } catch (error) {
        console.error('Proxy error:', error);
        res.status(500).json({ error: 'Internal server error', message: error.message });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Proxy server running on port ${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/health`);
    console.log(`Format endpoint: http://localhost:${PORT}/api/format`);
});
