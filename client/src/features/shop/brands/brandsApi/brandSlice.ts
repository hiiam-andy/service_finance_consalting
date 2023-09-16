import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../../../app/store";
import { BASE_URL } from "../../../../utils/constats";


interface BrandSlice {
  list: [{
    id: number,
    name?: string
  }]
}
const initialState: BrandSlice = {
  list: [{ id: 0 }]
}

export const getBrands = createAsyncThunk(
  'brands/getBrands',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`${BASE_URL}/api/brand`)
      return res.data
    } catch (err) {
      console.log(err)
      return thunkAPI.rejectWithValue(err)
    }
  }
)

const brandSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBrands.fulfilled, (state, action) => {
      state.list = action.payload
    });
  },
})

export const BrandsList = (state: RootState) => state.brands.list

export default brandSlice.reducer