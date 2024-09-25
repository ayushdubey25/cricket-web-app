import React, { useState, useEffect } from "react";
import axios from "axios";

const Score = () => {
  const [scores, setScores] = useState([]);
  const [error, setError] = useState("");
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/live-matches"
        );
        const data = response.data;
        setScores((prevScores) => data.data); // Use the callback function
      } catch (error) {
        console.error("Error fetching live scores:", error);
        setError("Error fetching live scores.");
      }
    };

    fetchScores();
  }, []);

  useEffect(() => {
    console.log("Scores state updated:", scores);
  }, [scores]);

  const displayedScores = scores.slice(0, 7);
  console.log("Displayed scores:", displayedScores);

  return (
    <div className="relative border-b mt-12 border-neutral-800">
      <div
        className={`flex flex-wrap mt-5 lg:mt-10 sm:text-sm justify-center lg:flex-row transition-opacity duration-700 ease-in-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="w-full justify-center items-center text-center">
          <img
            className="lg:w-20 xl:w-20 h-20 mx-auto"
            src="https://pngimg.com/uploads/cricket/cricket_PNG39.png"
            alt="Score"
          />
          <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-3 lg:mt-4 tracking-wide">
            Latest Cricket Scores
          </h2>
          {error ? (
            <p className="text-red-500">{error}</p>
          ) : displayedScores.length > 0 ? (
            <ul className="mt-5 space-y-4">
              {displayedScores.map((score, index) => (
                <li
                  key={index}
                  className="bg-neutral-900 p-4 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105"
                >
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 font-medium"
                  >
                    {score.name || "No Name"}
                  </a>
                  <p className="mt-2 text-neutral-400">
                    {score.status || "No Status"}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No scores available</p>
          )}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Score;
