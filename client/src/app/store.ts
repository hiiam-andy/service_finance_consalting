import { configureStore } from "@reduxjs/toolkit";
import TypeSlice from "../features/shop/types/TypeSlice";
import authSlice from "../features/auth/http/authSlice";
import productSlice from "../features/shop/products/productsSlice";

export const store = configureStore({
  reducer: {
    types: TypeSlice,
    user: authSlice,
    products: productSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch