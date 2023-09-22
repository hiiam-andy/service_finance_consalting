import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { BASE_URL } from "../../utils/constats";
import { RootState } from "../../app/store";


interface TypesSlice {
  list: [{
    id?: number,
    name?: string
  }],
  selectedType: number | null
}
const initialState: TypesSlice = {
  list: [{ id: 0 }],
  selectedType: null
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
  reducers: {
    setSelectedType: (state, action) => {
      state.selectedType = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getTypes.fulfilled, (state, action) => {
      state.list = action.payload
    });
  },
})

export const TypesList = (state: RootState) => state.types.list
export const selectedTypesList = (state: RootState) => state.types.selectedType
export const { setSelectedType } = typeSlice.actions;
export default typeSlice.reducer