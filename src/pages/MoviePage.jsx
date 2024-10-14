import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/features/movieSlice";
import MovieDetails from "../components/MovieDetails";

export default function MoviePage() {
  return (
    <div>
      <MovieDetails />
    </div>
  );
}
