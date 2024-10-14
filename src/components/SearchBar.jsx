import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function searchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [moviesList, setMoviesList] = useState([]);

  const { movies } = useSelector((state) => state.movies);

  function handleChange(e) {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() !== "") {
      const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(term.toLowerCase())
      );
      setMoviesList(filteredMovies);
    } else {
      setMoviesList([]);
    }
  }
  return (
    <div className="flex flex-col items-center pt-3 bg-gray-800">
      {/* Sökfält */}
      <input
        type="text"
        placeholder="Search the vault"
        className="w-[30%] h-12 rounded-full p-4 text-gray-800 text-2xl font-bold mb-4"
        onChange={handleChange}
      />

      {/* Filmlistan */}
      {moviesList.length > 0 && (
        <ul className="w-[30%] space-y-4">
          {moviesList.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id} className="block">
              <li
                key={movie.id}
                className="border-b pb-4 flex flex-row justify-between hover:scale-105"
              >
                {/* Titel och år */}
                <h3 className="text-xl text-white font-bold">
                  {movie.title}{" "}
                  <span className="text-gray-500 font-semibold">
                    ({movie.year})
                  </span>
                </h3>
                {/* Filmbild */}
                <img
                  src={movie.img}
                  alt={movie.title}
                  className=" h-auto mt-2 rounded-lg w-14"
                />
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}
