// import { useState } from "react";
import React from "react";
import RolingFooter from "./RolingFooter.jsx";
import { addFavorite, removeFavorite } from "../redux/features/movieSlice";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { CiStar } from "react-icons/ci";

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
        <p className="text-lg text-gray-400 mb-4">({movie.release_date})</p>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          className="w-84 h-84 object-cover rounded-lg mb-4 shadow-md shadow-[#22cf22]"
          style={{ width: "520px", height: "520px" }}
        />
      </div>
      <div className="flex justify-between text-5xl items-center">
        <p className="text-4xl mb-4">Language: {movie.original_language}</p>
        <button
          className="flex border border-r-2 border-[#22cf22] rounded-full p-6 gap-2  justify-center items-center"
          onClick={() => handleToggle(movie)}
        >
          {isFavorite(movie.id) ? "Remove from Favorite" : "Add to Favorite"}
          {isFavorite(movie.id) ? (
            <MdOutlineFavorite className="size-[40px]" />
          ) : (
            <MdFavoriteBorder className="size-[40px]" />
          )}
        </button>
      </div>

      <div className="pb-40">
        <p className=" flex align-center items-center text-5xl">
          <CiStar className="size-[40px]" />
          {movie.vote_average} ({movie.vote_count} voters)
        </p>
      </div>

      <div className="my-4 pb-40">
        <p className="font-semibold mb-2 text-5xl">Description:</p>
        <p className="text-gray-300 mb-4 text-4xl">{movie.overview}</p>
      </div>

      <div className="flex justify-center pb-40">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
          style={{ width: "500px", height: "500px", borderRadius: "30px" }}
        />
      </div>

      <RolingFooter />
    </div>
  );
}
