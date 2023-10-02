import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const countriesGetAll = createAsyncThunk(
  "countries/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/all`);
      return response.data;
    } catch (err) {
      const message = (err.message && err.response.data) || err.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const countriesGetByCode = createAsyncThunk(
  "countries/getByCode",
  async (code, thunkAPI) => {
    try {
      const response = await axios.get(`
    https://restcountries.com/v3.1/alpha/${code}`);
      return response.data;
    } catch (err) {
      const message = (err.message && err.response.data) || err.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const countriesGetByRegion = createAsyncThunk(
  "countries/getByRegion",
  async (region, thunkAPI) => {
    try {
      const response = await axios.get(`
    https://restcountries.com/v3.1/region/${region}`);
      return response.data;
    } catch (err) {
      const message = (err.message && err.response.data) || err.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
