import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../../utils/constats";
import { RootState } from "../../../app/store";



interface BrandSlice {
  list: [{
    id?: number,
    name?: string
  }],
  selectedBrand: number | null
}
const initialState: BrandSlice = {
  list: [{ id: 0 }],
  selectedBrand: null
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
  reducers: {
    setSelectedBrand: (state, action) => {
      state.selectedBrand = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getBrands.fulfilled, (state, action) => {
      state.list = action.payload
    });
  },
})

export const BrandsList = (state: RootState) => state.brands.list
export const selectedBrandsList = (state: RootState) => state.brands.selectedBrand
export const { setSelectedBrand } = brandSlice.actions;
export default brandSlice.reducer