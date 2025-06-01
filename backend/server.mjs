
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
const app = express();
const PORT = 5000;


app.use(cors());               // Allow all origins (you can restrict later)
app.use(express.json());       // Parse JSON body

// Proxy endpoint for URL shortening
app.post('/shorten', async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'Missing URL' });
  }

  try {
    // Make the POST request to CleanURI API
    const response = await fetch('https://cleanuri.com/api/v1/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({ url })
    });

    const data = await response.json();

    res.json(data);  // send API response back to frontend

  } catch (error) {
    console.error('Error in proxy:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});