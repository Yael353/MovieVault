import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/features/movieSlice";
import "../styles/App.css";

export default function MoviePage() {
  const dispatch = useDispatch();
  const { movies, status, error } = useSelector((state) => state.movies);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMovies());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-gray-800 text-white p-5 rounded-lg shadow-lg">
      <h1 className="flex justify-center items-center retro-title text-4xl font-bold mb-4">
        MovieVault
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="bg-gray-700 p-4 rounded-lg flex flex-col items-center shadow-lg transition-transform duration-200 hover:scale-105"
          >
            <img
              src={movie.img}
              alt={movie.title}
              className="w-full h-48 object-cover rounded-lg mb-2"
            />
            <h2 className="text-xl font-semibold mb-1">{movie.title}</h2>
            <p className="text-gray-300 text-sm mb-2">{movie.description}</p>
            <p className="text-gray-400 text-sm">
              <strong>Actors: </strong>
              {movie.actors.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
