import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/features/movieSlice";

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
    <div>
      <h1>MovieVault</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <img src={movie.img} alt={movie.title} style={{ width: "100px" }} />
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <p>
              <strong>Actors: </strong>
              {movie.actors.join(", ")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
