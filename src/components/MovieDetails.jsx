import React from "react";
import RolingFooter from "./RolingFooter";

export default function MovieDetails({ movie }) {
  // Om filmen inte finns, visa ett meddelande
  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="bg-gray-800 text-white p-5 shadow-lg rounded-lg">
      <div className="flex flex-col items-center mb-6">
        <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
        <p className="text-lg text-gray-400 mb-4">({movie.year})</p>
        <img
          src={movie.img}
          alt={movie.title}
          className="w-64 h-96 object-cover rounded-lg mb-4 shadow-md shadow-[#22cf22]"
        />
      </div>
      <div className="mb-4">
        <p className="text-lg font-semibold mb-2">Description:</p>
        <p className="text-gray-300 mb-4">{movie.description}</p>
      </div>
      <div>
        <p className="text-lg font-semibold mb-2">Actors:</p>
        <ul className="list-disc list-inside text-gray-300">
          {movie.actors.map((actor, index) => (
            <li key={index} className="text-gray-300 mb-1">
              {actor}
            </li>
          ))}
        </ul>
      </div>
      <RolingFooter />
    </div>
  );
}
