import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  fetchMovies,
  removeFavorite,
} from "../redux/features/movieSlice";
import { Link } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";

export default function MoviesList() {
  const dispatch = useDispatch();
  const { movies, status, error, favoriteMovies } = useSelector(
    (state) => state.movies
  );

  //Hämtar filmer när komponenten ladas
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMovies());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  function isFavorite(movieId) {
    return favoriteMovies.some((favorite) => favorite.id === movieId);
  }

  function handleToggle(movie) {
    if (isFavorite(movie.id)) {
      dispatch(removeFavorite(movie.id));
    } else {
      dispatch(addFavorite(movie));
    }
  }

  return (
    <div className="bg-gray-800 text-white p-5 shadow-lg">
      <h1 className="text-3xl md:text-5xl flex justify-center py-10">Movies</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
        {movies.map((movie) => (
          <li
            key={movie.id}
            className="bg-gray-700 p-4 rounded-lg flex flex-col items-center transition-transform duration-200 hover:scale-105 shadow-md shadow-[#22cf22] m-1"
          >
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              className="w-full h-48 object-cover rounded-lg mb-2"
            />

            <h2 className="text-lg md:text-xl font-semibold mb-1 text-center">
              {movie.title} ({movie.release_date})
            </h2>

            <button
              className="flex border border-r-2 border-[#22cf22] rounded-full pl-4 m-2 justify-center items-center"
              onClick={() => handleToggle(movie)}
            >
              {isFavorite(movie.id)
                ? "Remove from Favorite"
                : "Add to Favorite"}
              {isFavorite(movie.id) ? (
                <MdOutlineFavorite className="w-[30px] md:w-[40px]" />
              ) : (
                <MdFavoriteBorder className="w-[30px] md:w-[40px]" />
              )}
            </button>

            <p className="text-gray-300 text-sm mb-2 text-center">
              <strong>Description:</strong> {movie.overview}
            </p>

            <Link
              to={`/movie/${movie.id}`}
              className="text-blue-500 hover:underline mt-2"
            >
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
