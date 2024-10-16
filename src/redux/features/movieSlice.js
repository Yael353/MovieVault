import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// VITE_API_KEY kommer från din .env-fil
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  try {
    // Använd 'fetch' för att göra ett GET-anrop till OMDb API
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?page=2&limits=18`,
      {
        params: {
          api_key: API_KEY,
        },
      }
    );

    console.log("Fetched movie data:", response.data);
    return response.data.results;
    // Kontrollera om API-svaret är giltigt
    if (data.Response === "False") {
      throw new Error(data.Error); // Kasta ett fel om det är ett ogiltigt svar
    }

    return data.Search; // Returnera filmerna från sökningen
  } catch (error) {
    console.error("Error fetching movies:", error.message);
    throw error; // Kasta vidare felet för att Redux ska hantera det
  }
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
