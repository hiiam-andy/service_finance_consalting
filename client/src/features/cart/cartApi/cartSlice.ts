import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../utils/constats";
import { RootState } from "../../../app/store";
import { $authHost } from "../../../utils/interceptor";

interface cartType {
  list: [{
    id: number,
    name: string,
    info: string,
    quantity: number,
    price: number,
    img: string
  }] | []
}

const initialState: cartType = {
  list: []
}

export const getCart = createAsyncThunk(
  'cart/getCart',
  async (userId: string, thunkAPI) => {
    try {
      const res = await $authHost.get(`${BASE_URL}/api/cart`, {
        params: { userId }
      })
      return res.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.list = action.payload
    })
  }
})

export const CartList = (state: RootState) => state.cart.list
export default cartSlice.reducer