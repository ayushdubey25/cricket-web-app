import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-filter backdrop-blur-md border rounded-md">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img
              className="h-10 w-10 mr-2"
              src="https://www.llct20.com/public/season-2/images/cricket.png"
              alt=""
            />
            <span className="text-xl tracking-tight">CricWEB</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            <li>
              Where Every Match Tells a Story, and Every Fan Finds Their Home.
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
