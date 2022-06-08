import { createSlice } from "@reduxjs/toolkit";

export const initialStateValue = "";

export const theStore = createSlice({
  name: "theStore",
  initialState: {
    provinsi: initialStateValue,
    kota: initialStateValue,
    kecamatan: initialStateValue,
    desa: initialStateValue,
  },
  reducers: {
    getProvinsi: (state, action) => {
      state.provinsi = action.payload;
    },
    getKecamatan: (state, action) => {
      state.kecamatan = action.payload;
    },
    getKota: (state, action) => {
      state.kota = action.payload;
    },
    getDesa: (state, action) => {
      state.desa = action.payload;
    },
  },
});

export const { getProvinsi, getKecamatan, getKota, getDesa } = theStore.actions;

export default theStore.reducer;
