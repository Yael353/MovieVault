import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  return (
    <div className="bg-gray-800 flex items-center justify-evenly p-4 border-b border-[#22cf22] ">
      <img
        src="/movieVault.webp"
        alt="MovieVault Logo"
        className="w-[200px] h-[200px] p-4 rounded-full"
      />
      <div className="flex items-center">
        <button
          onClick={toggleDropdown}
          className="text-white text-4xl font-bold py-2 px-4 rounded hover:bg-gray-700 transition duration-300 mr-4"
        >
          Menu
        </button>
      </div>
      <div className="flex justify-between">
        <Link to="/" className="ml-auto">
          <button className="bg-white text-[#22cf22] font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300">
            Home
          </button>
        </Link>
        <Link to="/favorites" className="ml-auto">
          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300">
            Favorites
          </button>
        </Link>
      </div>
    </div>
  );
}
