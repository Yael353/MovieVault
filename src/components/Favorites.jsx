import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFavorite } from "../redux/features/movieSlice"; // Importera removeFavorite

export default function Favorites() {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector((state) => state.movies.favoriteMovies);
  console.log(favoriteMovies);

  if (favoriteMovies.length === 0) {
    return <p className="text-white">You have no favorite movies yet.</p>;
  }

  return (
    <div className="bg-gray-800 text-white p-5 shadow-lg h-screen">
      <h2 className="text-2xl font-bold mb-4">Your Favorite Movies</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
        {favoriteMovies.map((movie) => (
          <li
            key={movie.id}
            className="bg-gray-700 p-4 rounded-lg flex flex-col items-center transition-transform duration-200 hover:scale-105 shadow-md shadow-[#22cf22] m-1"
          >
            <img
              src={movie.img}
              alt={movie.title}
              className="w-full h-48 object-cover rounded-lg mb-2"
            />

            <h2 className="text-xl font-semibold mb-1">
              {movie.title} ({movie.year})
            </h2>

            <button
              className="text-red-500 mb-2"
              onClick={() => dispatch(removeFavorite(movie.id))}
            >
              Remove from Favorites
            </button>

            <p className="text-gray-300 text-sm mb-2 flex flex-col">
              <strong>Description:</strong> {movie.description}
            </p>

            <p className="text-gray-400 text-sm">
              <strong>Actors:</strong> {movie.actors.join(", ")}
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
