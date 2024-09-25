import React from "react";

const About = () => {
  return (
    <div className="relative border-b mt-12 border-neutral-800 ">
      <div className="flex flex-wrap mt-5 lg:mt-10 sm:text-sm justify-center lg:flex-row">
        <div className="w-full justify-center items-center text-center">
          <img
            className="lg:w-15 xl:w-15 h-10 mx-auto"
            src="https://cdn-icons-png.flaticon.com/512/5822/5822318.png"
            alt="CricWEB"
          />
          <h1 className="text-lg sm:text-2xl lg:text-3xl mt-3 lg:mt-4 tracking-wide text-orange-600">
            About Us
          </h1>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-3 lg:mt-4 tracking-wide">
            EXPLORE NOW
          </h2>
          <p className="mb-0 mt-10 text-lg text-center text-neutral-500 ">
            Welcome to our cricket hub, your one-stop destination for everything
            cricket! Our platform is designed to bring cricket enthusiasts
            together, offering a unique blend of excitement, passion, and love
            for the game. Whether you're looking for real-time match updates,
            the latest news, or in-depth analyses, we've got it all covered. Our
            mission is to keep the cricket spirit alive by creating an engaging
            and interactive experience for fans of all ages.
            <br />
            <br />
            Explore our interactive features, join discussions, and dive into
            the world of cricket with like-minded fans. Whether you're a
            seasoned expert or just starting to enjoy the sport, our website
            provides something for everyone. Let’s celebrate the thrill, energy,
            and joy of cricket, one match at a time!
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default About;
