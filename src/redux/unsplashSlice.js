import { createSlice } from "@reduxjs/toolkit";
import { getUnsplashPhotos } from "./operations";

getUnsplashPhotos;
const unsplashSlice = createSlice({
  name: "gallery",
  initialState: {
    gallery: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUnsplashPhotos.pending, (state, _) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUnsplashPhotos.fulfilled, (state, action) => {
        state.gallery = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getUnsplashPhotos.rejected, (state, action) => {
        state.gallery = [];
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const unsplashReducer = unsplashSlice.reducer;
