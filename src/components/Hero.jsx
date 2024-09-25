import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:mt-15">
        <div className="lg:w-2/3 xl:w-3/4 mt-2">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            Experience the Thrill of
            <span className="bg-gradient-to-r from-orange-500 to-blue-600 text-transparent bg-clip-text">
              {" "}
              Cricket!
            </span>
          </h1>
          <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
            Whether you’re a fan, a player, or just love the thrill of the game,
            this is your go-to hub. Join us and experience the passion,
            celebrate every boundary, and stay updated with every match. It's
            not just a sport—it's a way of life!
          </p>
        </div>
        <img
          src="https://megicwin.com/assets/images/Magicwin-Ads-qlkgxoazaidy6nz6xplmgo9llynehbgf7g9bw6m6f4.png"
          alt=""
          className="lg:w-1/2 xl:w-1/3 lg:ml-10 xl:ml-20"
        />
      </div>
      <hr />
    </>
  );
};

export default Hero;
