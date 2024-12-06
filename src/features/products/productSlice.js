import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  productList: [],
  error: null,
};

const BASE_URL = "http://localhost:5174/products";

export const productSlice = createSlice({
  name: "productR", 
  initialState,
  reducers: {},
});

export default productSlice.reducer;
