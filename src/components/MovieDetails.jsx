import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams();
  const movie = useSelector((state) => {
    state.movies.movies.find((movie) => movie.id === parseInt(id));
  });

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
      <p className="text-lg text-gray-600 mb-2">({movie.year})</p>
      <img src={movie.img} alt={movie.title} className="w-64 h-96 mb-4" />
      <p className="text-lg font-semibold mb-2">Description:</p>
      <p className="text-gray-700 mb-6">{movie.description}</p>
      <p className="text-lg font-semibold mb-2">Actors:</p>
      <ul className="list-disc list-inside">
        {movie.actors.map((actor, index) => (
          <li key={index} className="text-gray-700">
            {actor}
          </li>
        ))}
      </ul>
    </div>
  );
}
