import { configureStore } from "@reduxjs/toolkit";
import { reset } from "./action";
import { addMovie, removeMovie, movieReducer } from "./slices/movieSlice";
import { addSong, removeSong, songReducer } from "./slices/songSlice";

const store = configureStore({
  reducer: {
    songs: songReducer,
    movies: movieReducer
  }
});

export { store, reset, addMovie, addSong, removeMovie, removeSong };
