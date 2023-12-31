import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";


interface authType {
  isAdmin: boolean,
  isAuth: boolean,
  userList:
  {
    id?: number,
    email?: string,
    role?: string
  }
}

const initialState: authType = {
  isAdmin: false,
  isAuth: false,
  userList: {}
}

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload
    },
    setUser: (state, action) => {
      state.userList = action.payload
    }
  },
})

export const userIsAuth = (state: RootState) => state.user.isAuth
export const user = (state: RootState) => state.user.userList
export const { setIsAuth, setUser } = authSlice.actions

export default authSlice.reducer