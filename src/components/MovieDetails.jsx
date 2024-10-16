// import { useState } from "react";
import React from "react";
import RolingFooter from "./RolingFooter.jsx";
import {
  addFavorite,
  fetchMovies,
  removeFavorite,
} from "../redux/features/movieSlice";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";

export default function MovieDetails({ movie }) {
  const dispatch = useDispatch();
  const { movies, favoriteMovies } = useSelector((state) => state.movies);

  if (!movie) {
    return <div>Movie not found</div>;
  }
  const isFavorite = (movieId) => {
    return favoriteMovies.some((favorite) => favorite.id === movieId);
  };

  const handleToggle = (movie) => {
    if (isFavorite(movie.id)) {
      dispatch(removeFavorite(movie.id));
    } else {
      dispatch(addFavorite(movie));
    }
  };
  return (
    <div className="bg-gray-800 text-white p-5 shadow-lg rounded-lg">
      <div className="flex flex-col items-center mb-6">
        <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
        <p className="text-lg text-gray-400 mb-4">({movie.year})</p>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          className="w-84 h-84 object-cover rounded-lg mb-4 shadow-md shadow-[#22cf22]"
          style={{ width: "520px", height: "520px" }}
        />
      </div>
      <div className="flex justify-end">
        <button
          className="flex border border-r-2 border-[#22cf22] rounded-full pl-4 m-2 justify-center items-center"
          onClick={() => handleToggle(movie)} // Anropar klickfunktionen
        >
          {isFavorite(movie.id) ? "Remove from Favorite" : "Add to Favorite"}
          {isFavorite(movie.id) ? (
            <MdOutlineFavorite className="w-[40px]" />
          ) : (
            <MdFavoriteBorder className="w-[40px]" />
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
              {actor.join()}
            </li>
          ))}
        </ul>
      </div>
      <RolingFooter />
    </div>
  );
}
