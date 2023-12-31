import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constats";
import { RootState } from "../../app/store";

interface productType {
  list: [{
    id: number,
    name: string,
    price: number,
    info: string,
    quantity: number,
    typeId: number,
    brandId: number,
    img: string
  }]
}

const initialState: productType = {
  list: [{
    id: 0,
    name: '',
    price: 0,
    info: '',
    quantity: 0,
    typeId: 0,
    brandId: 0,
    img: ''
  }]
}

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (id: number, thunkAPI) => {
    try {
      const res = await axios(`${BASE_URL}/api/product/${id}`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err)
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.list = action.payload
    });
  },
});

export const OneProductList = (state: RootState) => state.product.list

export default productSlice.reducer;
