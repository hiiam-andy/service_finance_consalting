import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../../utils/constats";
import { RootState } from "../../../app/store";

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
interface props {
  typeId: number | null,
  brandId: number | null,
  limit?: number,
  page?: number
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


export const getProducts = createAsyncThunk(
  "products/getProducts",
  async ({ typeId, brandId, limit, page }: props) => {
    try {
      const res = await axios(`${BASE_URL}/api/product`, {
        params: { typeId, brandId, limit, page }
      });

      return res.data;
    } catch (err) {
      console.log(err);

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

export const ProductList = (state: RootState) => state.products.list

export default eventsSlice.reducer;
