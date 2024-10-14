import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  return (
    <div className="bg-gray-800 flex items-center justify-between p-4">
      {/* Vänster sektion: Logo och Menu */}
      <div className="flex items-center">
        <img
          src="/movieVault.webp"
          alt="MovieVault Logo"
          className="w-[80px] p-4"
        />
        <button
          onClick={toggleDropdown}
          className="text-white text-4xl font-bold py-2 px-4 rounded hover:bg-gray-700 transition duration-300 mr-4"
        >
          Menu
        </button>
      </div>

      <Link to="/favorites" className="ml-auto">
        <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300">
          Favorites
        </button>
      </Link>
    </div>
  );
}
