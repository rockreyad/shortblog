import React from "react";

const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center mb-1 mt-2">
      <h2 className="font-semibold text-xl text-blue-500">
        Good Morning,
        <span className="text-gray-400 mx-2 font-light">Reyad</span>{" "}
      </h2>
      <h1 className="text-4xl font-bold text-blue-800 mb-2">
        <span className="text-5xl text-gray-300 p-1">&ldquo;</span>Blog
        <span className="text-5xl text-gray-300 p-1">&rdquo;</span>
      </h1>
      <p className="text-gray-400">awesome place to make oneself</p>
      <p className="text-gray-400">
        productive and entertained through daily updates
      </p>
    </header>
  );
};

export default Header;
