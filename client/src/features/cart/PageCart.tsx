import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { CartList, getCart } from "./cartSlice";

import jwt_decode from "jwt-decode";
import Cart from "./Cart";

export default function PageCart() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const user: any = jwt_decode(String(localStorage.getItem("token")));
    const id = user.id;
    dispatch(getCart(String(id)));
  }, [dispatch]);

  return (
    <div>
      <Header />

      <Cart />
    </div>
  );
}
