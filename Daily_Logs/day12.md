# Day 12 – API Mastery in Backend Development
## Overview
Today’s focus was on learning how to make server-side API requests—enabling your backend to interact with third-party services, fetch external data, and process it before sending it to the frontend. This is critical for integrating dynamic, external resources into applications securely and efficiently.

## Key Concepts Learned
### What Are Server-Side API Requests?
Server-side requests are outbound HTTP calls made from your backend (Node.js, Python, etc.) to an external API. Unlike client-side requests (from the browser), these run securely on the server, keeping credentials, API keys, and logic hidden from users.

### Why Use Server-Side API Requests?
Security: Keeps API keys and tokens hidden from users.

Customization: Allows preprocessing or filtering of external data.

Control: Enables response caching, transformation, error handling, and fallback logic.

Rate Limiting: Protects APIs from overuse by managing frequency of requests internally.

## Tools & Methods
📦 Node.js + axios
Used the axios library in a Node.js server to make external requests.

``` bash
Copy
Edit
npm install axios
```
``` js
Copy
Edit
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.get('/random-dog', async (req, res) => {
  try {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random');
    res.json({ image: response.data.message });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch dog image' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
🔄 Flow of Request
Client requests /random-dog.
```

Backend makes server-side request to dog.ceo API.

Backend returns the fetched image URL to the client.

🌐 Real-World Use Cases
Fetching weather data from OpenWeather for your app and formatting the output.

Converting currency using an exchange rate API, then passing formatted results to the frontend.

Image or video processing, where raw data is fetched and manipulated before client delivery.

⚠️ Challenges Faced
Handling async behavior in API calls (async/await, try/catch).

Properly forwarding only the relevant portion of external API responses.

Managing server errors without exposing API internals.

📌 Technical Notes
🔐 Environment Variables
Used .env files to securely store API keys.

env
Copy
Edit
WEATHER_API_KEY=your_key_here
🌍 External API Structure
External APIs usually expose:

Base URL: e.g., https://api.example.com

Endpoints: e.g., /weather

Query Parameters: e.g., ?city=lagos&units=metric

Headers: For authentication or data format

### Key Takeaways
Server-side requests are essential for secure and flexible data integration.

axios makes HTTP requests simple and readable in Node.js.

Always handle API errors gracefully to avoid crashing the server.

Real-world applications often act as data middlemen, fetching and transforming external resources before client delivery.