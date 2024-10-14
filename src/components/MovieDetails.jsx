import { useState } from "react";
import React from "react";
import RolingFooter from "./RolingFooter.jsx";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";

export default function MovieDetails({ movie }) {
  const [toggleFav, setToggleFav] = useState("false");

  if (!movie) {
    return <div>Movie not found</div>;
  }

  function handleToggle() {
    setToggleFav(!toggleFav);
  }
  return (
    <div className="bg-gray-800 text-white p-5 shadow-lg rounded-lg">
      <div className="flex flex-col items-center mb-6">
        <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
        <p className="text-lg text-gray-400 mb-4">({movie.year})</p>
        <img
          src={movie.img}
          alt={movie.title}
          className="w-84 h-84 object-cover rounded-lg mb-4 shadow-md shadow-[#22cf22]"
        />
      </div>
      <div className="flex justify-end">
        <button
          className="flex border border-r-2 border-[#22cf22] rounded-full pl-4 m-2 justify-center items-center"
          onClick={handleToggle} // Anropar klickfunktionen
        >
          Add to favorites
          {toggleFav ? (
            <MdFavoriteBorder className="w-[40px]" />
          ) : (
            <MdOutlineFavorite className="w-[40px]" />
          )}
        </button>
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
