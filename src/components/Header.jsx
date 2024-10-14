import React from "react";
import "../styles/App.css";

export default function Header() {
  return (
    <div className="bg-gray-800 text-white p-5 shadow-lg">
      <h1 className="flex justify-center items-center retro-title text-4xl font-bold mb-4 shadow-md shadow-[#22cf22] pb-3">
        MovieVault
      </h1>
    </div>
  );
}
