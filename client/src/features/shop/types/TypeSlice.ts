import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../utils/constats";
import axios from "axios";
import { RootState } from "../../../app/store";

interface TypesSlice {
  list: [{
    id: number,
    name?: string
  }]
}
const initialState: TypesSlice = {
  list: [{ id: 0 }]
}

export const getTypes = createAsyncThunk(
  'types/getTypes',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`${BASE_URL}/api/type`)
      return res.data
    } catch (err) {
      console.log(err)
      return thunkAPI.rejectWithValue(err)
    }
  }
)

const typeSlice = createSlice({
  name: 'types',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTypes.fulfilled, (state, action) => {
      state.list = action.payload
    });
  },
})

export const TypesList = (state: RootState) => state.types.list

export default typeSlice.reducer