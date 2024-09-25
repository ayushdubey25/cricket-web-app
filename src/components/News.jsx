import React, { useEffect, useState } from "react";
import axios from "axios";
import { useInView } from "react-intersection-observer";

const News = () => {
  const [newsItems, setNewsItems] = useState([]);
  const rssUrl = "https://www.espncricinfo.com/rss/content/story/feeds/0.xml";
  const limit = 10; // Number of news items to display

  const { ref: newsRef, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Adjust if needed (0.1 means 10% visibility)
  });

  useEffect(() => {
    const fetchRSSFeed = async () => {
      try {
        const response = await axios.get("http://localhost:5002/api/rss", {
          params: { url: rssUrl },
        });
        setNewsItems(response.data.items);
      } catch (error) {
        console.error("Error fetching RSS feed:", error);
      }
    };
    fetchRSSFeed();
  }, []);

  return (
    <div className="relative border-b mt-12 border-neutral-800">
      <div
        ref={newsRef}
        className={`flex flex-wrap mt-5 lg:mt-10 sm:text-sm justify-center lg:flex-row transition-opacity duration-700 ease-in-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="w-full justify-center items-center text-center">
          <img
            className="lg:w-20 xl:w-20 h-20 mx-auto"
            src="https://png.pngtree.com/png-clipart/20221127/ourmid/pngtree-cricket-wickets-ball-png-image_6483453.png"
            alt="News"
          />

          <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-3 lg:mt-4 tracking-wide">
            Latest Cricket News
          </h2>
          <ul className="mt-5 space-y-4">
            {newsItems.slice(0, limit).map((item, index) => (
              <li
                key={index}
                className="bg-neutral-900 p-4 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105"
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 font-medium"
                >
                  {item.title}
                </a>
                <p className="mt-2 text-neutral-400">{item.contentSnippet}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default News;
