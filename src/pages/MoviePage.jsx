import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/features/movieSlice";
import MovieDetails from "../components/MovieDetails";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

export default function MoviePage() {
  const dispatch = useDispatch();
  const { id } = useParams();
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

  const movie = movies.find((movie) => movie.id === parseInt(id, 10));

  return (
    <div>
      <Header />
      <Navbar />
      <SearchBar />
      <div className="bg-gray-800">
        {movie ? <MovieDetails movie={movie} /> : <div>Movie not found</div>}
      </div>
    </div>
  );
}
