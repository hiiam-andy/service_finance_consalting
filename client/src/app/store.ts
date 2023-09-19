import { configureStore } from "@reduxjs/toolkit";
import TypeSlice from "../features/shop/types/TypeSlice";
import authSlice from "../features/auth/http/authSlice";
import productsSlice from "../features/shop/products/productsSlice";
import brandSlice from "../features/shop/brands/brandsApi/brandSlice";
import cartSlice from "../features/cart/cartSlice";
import productSlice from "../features/shop/products/productSlice";

export const store = configureStore({
  reducer: {
    types: TypeSlice,
    brands: brandSlice,
    user: authSlice,
    products: productsSlice,
    product: productSlice,
    cart: cartSlice,

  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch