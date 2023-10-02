import { createSlice } from "@reduxjs/toolkit";
import {
  countriesGetAll,
  countriesGetByCode,
  countriesGetByRegion,
} from "./countriesAction";
const initialState = {
  loading: false,
  countriesData: [],
  countryDetails: [],
  error: false,
  success: false,
  message: "",
  region: "",
  searchValue: "",
};
export const countriesSlice = createSlice({
  name: "countries",
  initialState: initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.success = false;
      state.error = false;
      state.message = "";
      state.countryDetails = [];
      state.region = "";
      state.searchValue = "";
    },
    setRegion: (state, action) => {
      state.region = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(countriesGetAll.pending, (state) => {
        state.loading = true;
      })
      .addCase(countriesGetAll.fulfilled, (state, action) => {
        state.loading = false;
        state.countriesData = action.payload;
        state.success = true;
      })
      .addCase(countriesGetAll.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.countriesData = [];
      })
      .addCase(countriesGetByCode.pending, (state) => {
        state.loading = true;
      })
      .addCase(countriesGetByCode.fulfilled, (state, action) => {
        state.loading = false;
        state.countryDetails = action.payload;
        state.success = true;
      })
      .addCase(countriesGetByCode.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.countryDetails = [];
      })
      .addCase(countriesGetByRegion.pending, (state) => {
        state.loading = true;
      })
      .addCase(countriesGetByRegion.fulfilled, (state, action) => {
        state.loading = false;
        state.countriesData = action.payload;
        state.success = true;
      })
      .addCase(countriesGetByRegion.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.countriesData = [];
      });
  },
});
export const { reset, setRegion, setSearchValue } = countriesSlice.actions;
export default countriesSlice.reducer;
