// server.js
const express = require("express");
const axios = require("axios");
const RSSParser = require("rss-parser");
const cors = require("cors");

const app = express();
const port = 5002; // You can choose any port you prefer

// Enable CORS with explicit settings
app.use(
  cors({
    origin: "*", // Allows all origins. Change this for production.
  })
);

// Create an endpoint to fetch RSS feeds
app.get("/api/rss", async (req, res) => {
  const { url } = req.query; // RSS feed URL passed as a query parameter

  if (!url) {
    return res.status(400).json({ error: "URL query parameter is required" });
  }

  try {
    const parser = new RSSParser();
    const feed = await parser.parseURL(url);
    res.json(feed);
  } catch (error) {
    console.error("Error fetching or parsing RSS feed:", error);
    res.status(500).json({ error: "Failed to fetch or parse RSS feed" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
