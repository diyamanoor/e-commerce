import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      return response.data;
    } catch (error) {
      console.error(error);
      throw error; 
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productsFetch.pending, (state) => {
        state.status = "pending";
      })
      .addCase(productsFetch.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success";
      })
      .addCase(productsFetch.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export default productsSlice.reducer;
