import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/features/movieSlice";

export default function MoviesList() {
  const dispatch = useDispatch();
  const { movies, status, error } = useSelector((state) => state.movies);

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

  return (
    <div className="bg-gray-800 text-white p-5  shadow-lg">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
        {movies.map((movie, index) => (
          <div
            key={index}
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
            <p className="text-gray-300 text-sm mb-2 flex flex-col">
              <strong>Description:</strong> {movie.description}
            </p>

            <p className="text-gray-400 text-sm">
              <strong>Actors:</strong> {movie.actors.join(", ")}
            </p>
          </div>
        ))}
      </ul>
    </div>
  );
}
