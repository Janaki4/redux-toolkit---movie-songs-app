import { reset } from "../action";
import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    }
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      console.log(action);

      return [];
    });
  }
});

export const { addMovie, removeMovie } = moviesSlice.actions;
export const movieReducer = moviesSlice.reducer;
