import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?page=2&limits=18&api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Något gick fel med att hämta filmerna");
  }

  const data = await response.json();

  console.log("Fetched movie data:", data);

  if (data.Response === "False") {
    throw new Error(data.Error);
  }

  return data.results;
});

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    favoriteMovies: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addFavorite: (state, action) => {
      const movie = action.payload;

      if (!state.favoriteMovies.find((fav) => fav.id === movie.id)) {
        state.favoriteMovies.push(movie);
      }
    },

    removeFavorite: (state, action) => {
      const movieId = action.payload;
      state.favoriteMovies = state.favoriteMovies.filter(
        (movie) => movie.id !== movieId
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.movies = action.payload;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const { addFavorite, removeFavorite } = movieSlice.actions;
export default movieSlice.reducer;
