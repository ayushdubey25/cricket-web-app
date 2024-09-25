import React, { useState } from "react";

const MultiStageForm = ({ onSubmit }) => {
  const [stage, setStage] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    address: "", // For stage 2 (favorite cricket team)
    player: "", // For stage 3 (favorite cricket player)
    email: "",
  });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleNextStage = () => {
    if (stage === 1 && !formData.name) {
      alert("Please enter your name.");
      return;
    }
    if (stage === 2 && !formData.address) {
      alert("Please enter your favorite cricket team.");
      return;
    }
    if (stage === 3 && !formData.player) {
      alert("Please enter your favorite cricket player.");
      return;
    }
    setStage(stage + 1);
  };

  const handlePrevStage = () => {
    setStage(stage - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.email) {
      alert("Please enter your email.");
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:mt-15 justify-center">
      <div className="lg:w-2/3 xl:w-3/4 mt-2">
        <h1 className="text-4xl sm:text-4xl lg:text-7xl text-center items-center">
          Fill the details to get
          <span className="bg-gradient-to-r from-orange-500 to-blue-600 text-transparent bg-clip-text">
            {" "}
            LIVE CRICKET NEWS AND SCORES
          </span>
        </h1>

        <div className="mt-10 flex justify-center">
          {stage === 1 && (
            <div className="w-full max-w-md">
              <h2 className="text-2xl mb-4 text-center">Stage 1: Name</h2>
              <form>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <button
                  type="button"
                  onClick={handleNextStage}
                  className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Next
                </button>
              </form>
            </div>
          )}

          {stage === 2 && (
            <div className="w-full max-w-md">
              <h2 className="text-2xl mb-4 text-center">
                Stage 2: Favorite Cricket Team
              </h2>
              <form>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter favorite cricket team"
                  className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <button
                  type="button"
                  onClick={handlePrevStage}
                  className="w-full p-2 mb-4 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={handleNextStage}
                  className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Next
                </button>
              </form>
            </div>
          )}

          {stage === 3 && (
            <div className="w-full max-w-md">
              <h2 className="text-2xl mb-4 text-center">
                Stage 3: Enter Your Favorite Cricket Player
              </h2>
              <form>
                <input
                  type="text"
                  name="player" // Changed to "player" for stage 3
                  value={formData.player} // Using formData.player for stage 3
                  onChange={handleInputChange}
                  placeholder="Enter favorite cricket player"
                  className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <button
                  type="button"
                  onClick={handlePrevStage}
                  className="w-full p-2 mb-4 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={handleNextStage}
                  className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Next
                </button>
              </form>
            </div>
          )}

          {stage === 4 && (
            <div className="w-full max-w-md">
              <h2 className="text-2xl mb-4 text-center">
                Stage 4: Enter Your Email
              </h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <button
                  type="button"
                  onClick={handlePrevStage}
                  className="w-full p-2 mb-4 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStageForm;
