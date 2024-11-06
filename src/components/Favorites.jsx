import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFavorite } from "../redux/features/movieSlice";

export default function Favorites() {
  const dispatch = useDispatch();

  // hämtar favoriter från store
  const favoriteMovies = useSelector((state) => state.movies.favoriteMovies);
  console.log(favoriteMovies);

  //Meddelande som visas när favoriter är tomt
  if (favoriteMovies.length === 0) {
    return <p className="text-white">You have no favorite movies yet.</p>;
  }

  return (
    <div className="bg-gray-800 text-white p-5 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Your Favorite Movies</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
        {favoriteMovies.map((movie) => (
          <li
            key={movie.id}
            className="bg-gray-700 p-4 rounded-lg flex flex-col items-center transition-transform duration-200 hover:scale-105 shadow-md shadow-[#22cf22] m-1"
          >
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              className="w-full h-80 object-cover rounded-lg mb-2"
            />

            <h2 className="text-xl font-semibold mb-1">
              {movie.title} ({movie.release_date})
            </h2>

            <Link
              to={`/movie/${movie.id}`}
              className="text-blue-500 text-3xl hover:underline mt-2"
            >
              View Details
            </Link>

            <p className="text-gray-300 text-sm mb-2 flex flex-col">
              <strong>Description:</strong> {movie.overview}
            </p>

            <button
              className="text-red-500 text-1xl mb-2 hover:scale-105"
              onClick={() => dispatch(removeFavorite(movie.id))}
            >
              Remove from Favorites
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
