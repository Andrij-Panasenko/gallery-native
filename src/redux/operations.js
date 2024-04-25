import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://api.unsplash.com";

const ACCESS_KEY = "Ms8MFk1R4jQBhTg7Zi2Zc3LVS-jYo-cNgEZn6ymEuug";

export const getUnsplashPhotos = createAsyncThunk(
  "get/unsplashPhoto",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/photos?client_id=${ACCESS_KEY}`);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
