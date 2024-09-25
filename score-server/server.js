// score-server.js
const express = require("express");
const cors = require("cors");
const { getLiveMatches } = require("./services/score");

const app = express();
const PORT = 5001;

// Enable CORS with explicit settings
app.use(
  cors({
    origin: "*", // Allows all origins. Change this for production.
  })
);

// Create an endpoint to fetch live matches
app.get("/api/live-matches", async (req, res) => {
  try {
    const liveMatches = await getLiveMatches();
    if (liveMatches) {
      res.json(liveMatches);
    } else {
      res.status(500).json({ error: "Failed to fetch live matches" });
    }
  } catch (error) {
    console.error("Error fetching live matches:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
