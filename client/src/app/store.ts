import { configureStore } from "@reduxjs/toolkit";

import authSlice from "../features/auth/http/authSlice";
import productsSlice from "../features/shop/products/productsSlice";
import cartSlice from "../features/cart/cartApi/cartSlice";
import productSlice from "../features/product/productSlice";
import TypeSlice from "../components/typeBar/TypeSlice";
import brandSlice from "../components/brandBar/brandsApi/brandSlice";


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