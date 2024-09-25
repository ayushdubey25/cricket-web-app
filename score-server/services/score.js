const axios = require("axios");

const API_URL =
  "https://api.cricapi.com/v1/currentMatches?apikey=b363b4b4-67a2-418a-a915-7d823093b894&offset=0";
const API_KEY = "b363b4b4-67a2-418a-a915-7d823093b894";

let cachedData = null;
let cacheTime = null;
const CACHE_DURATION = 15 * 60 * 1000;

const getLiveMatches = async () => {
  const now = Date.now();

  if (cachedData && cacheTime && now - cacheTime < CACHE_DURATION) {
    console.log("Returning cached data");
    return cachedData;
  }

  try {
    const response = await axios.get(API_URL, {
      params: {
        apikey: API_KEY,
        offset: 0,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    cachedData = response.data;
    cacheTime = now;

    console.log("API Response:", response.data);

    if (response.data.status === "failure" && response.data.reason) {
      throw new Error(response.data.reason);
    }

    return response.data.data || [];
  } catch (error) {
    console.error("Error fetching live matches:", error.message);
    return [];
  }
};

module.exports = { getLiveMatches };
