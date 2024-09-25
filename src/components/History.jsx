import React from "react";
import records from "../data/history.json"; // Importing JSON data directly

const History = () => {
  return (
    <div className="relative border-b mt-12 border-neutral-800">
      <div className="flex flex-wrap mt-5 lg:mt-10 sm:text-sm justify-center lg:flex-row">
        <div className="w-full justify-center items-center text-center">
          <img
            className="lg:w-15 xl:w-15 h-10 mx-auto"
            src="https://webstockreview.net/images/cricket-clipart-boy-16.png"
            alt="History"
          />
          <h1 className="text-lg sm:text-2xl lg:text-3xl mt-3 lg:mt-4 tracking-wide text-orange-600">
            Some
          </h1>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-3 lg:mt-4 tracking-wide">
            Historical Records
          </h2>
          <ul className="mb-0 mt-10 text-lg text-center justify-center text-orange-500">
            {records.map((record, index) => (
              <li key={index} className="mb-4 items-center justify-center ">
                <div className="w-28 h-28 border rounded-lg overflow-hidden mx-auto">
                  <img
                    src={record.image}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <strong>{record.title}:</strong> {record.recordHolder} -{" "}
                  {record.score || record.wins}{" "}
                  {record.against ? `against ${record.against}` : ""}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default History;
