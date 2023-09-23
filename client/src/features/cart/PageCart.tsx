import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { CartList, getCart } from "./cartApi/cartSlice";

import jwt_decode from "jwt-decode";
import Cart from "./Cart";

export default function PageCart() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const user: any = jwt_decode(String(localStorage.getItem("token")));
    const id = user.id;
    dispatch(getCart(String(id)));
  }, [dispatch]);

  const cart = useAppSelector(CartList);
  const res = cart.map((el) => {
    return (
      <ul style={{ border: "1px solid grey" }}>
        <li> товар с айди {el.productId}</li>
        <li>количество товара {el.quantity}</li>
      </ul>
    );
  });

  return (
    <div>
      <Header />
      <Cart />
      {res}
    </div>
  );
}
