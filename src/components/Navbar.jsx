import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  return (
    <div className="bg-gray-800 flex flex-col md:flex-row items-center justify-between p-4 border-b border-[#22cf22]">
      <img
        src="/movieVault.webp"
        alt="MovieVault Logo"
        className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] p-2 md:p-4 rounded-full"
      />

      <div className="flex items-center my-4 md:my-0">
        <button
          onClick={toggleDropdown}
          className="text-white text-2xl md:text-4xl font-bold py-2 px-4 rounded hover:bg-gray-700 transition duration-300 mr-2 md:mr-4"
        >
          Menu
        </button>
      </div>

      <div className="flex flex-col md:flex-row w-full md:w-auto justify-center md:justify-between gap-3 md:gap-5">
        <Link to="/" className="flex-1">
          <button className="w-full  bg-white text-[#22cf22] font-bold py-3 md:py-5 text-xl md:text-3xl rounded p-4 hover:bg-green-600 transition duration-300">
            Home
          </button>
        </Link>

        <Link to="/favorites" className="flex-1">
          <button className="w-full bg-green-500 text-white font-bold py-3 md:py-5 text-xl md:text-3xl rounded p-4 hover:bg-green-600 transition duration-300">
            Favorites
          </button>
        </Link>
      </div>
    </div>
  );
}
