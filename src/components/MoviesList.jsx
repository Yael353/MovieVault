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

  // Kontrollera om filmen är en favorit
  const isFavorite = (movieId) => {
    return favoriteMovies.some((favorite) => favorite.id === movieId);
  };

  // Hantera favorit-toggle
  const handleToggle = (movie) => {
    if (isFavorite(movie.id)) {
      dispatch(removeFavorite(movie.id)); // Ta bort från favoriter om den redan är favorit
    } else {
      dispatch(addFavorite(movie)); // Lägg till som favorit om den inte är favorit
    }
  };

  return (
    <div className="bg-gray-800 text-white p-5  shadow-lg">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
        {movies.slice(0, 19).map((movie) => (
          <li
            key={movie.id}
            className="bg-gray-700 p-4 rounded-lg flex flex-col items-center transition-transform duration-200 hover:scale-105 shadow-md shadow-[#22cf22] m-1"
          >
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              className="w-full h-48 object-cover rounded-lg mb-2"
            />

            <h2 className="text-xl font-semibold mb-1">
              {movie.title} ({movie.release_date})
            </h2>

            <button
              className="flex border border-r-2 border-[#22cf22] rounded-full pl-4 m-2 justify-center items-center"
              onClick={() => handleToggle(movie)} // Anropar klickfunktionen
            >
              {isFavorite(movie.id)
                ? "Remove from Favorite"
                : "Add to Favorite"}
              {isFavorite(movie.id) ? (
                <MdOutlineFavorite className="w-[40px]" />
              ) : (
                <MdFavoriteBorder className="w-[40px]" />
              )}
            </button>

            <p className="text-gray-300 text-sm mb-2 flex flex-col">
              <strong>Description:</strong> {movie.overview}
            </p>

            {/* <p className="text-gray-400 text-sm">
              <strong>Actors:</strong> {movie.actors.join(", ")}
            </p> */}
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
