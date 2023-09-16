import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../../utils/constats";
import { RootState } from "../../../app/store";

interface productType {
  list: {

    id: number,
    name: string,
    price: number,
    info: string,
    quantity: number,
    typeId: number,
    brandId: number
  }
}

const initialState: productType = {
  list: {
    id: 0,
    name: '',
    price: 0,
    info: '',
    quantity: 0,
    typeId: 0,
    brandId: 0
  }
}


export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      const res = await axios(`${BASE_URL}/product`);

      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const eventsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export const ProductList = (state: RootState) => state.products

export default eventsSlice.reducer;
