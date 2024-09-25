import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import News from "./components/News";
import Footer from "./components/Footer";
import History from "./components/History";
import Score from "./components/Score";
import MultiStageForm from "./components/MultiStageForm";

const App = () => {
  const [showWebsite, setShowWebsite] = useState(false);
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (data) => {
    setFormData(data);
    setShowWebsite(true);
  };

  return (
    <div>
      <Navbar />
      {!showWebsite ? (
        <MultiStageForm onSubmit={handleFormSubmit} />
      ) : (
        <div>
          <div className="max-w-7xl mx-auto pt-10 px-6">
            <Hero />
            <Score />
            <News />
            <History />
            <About />
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
