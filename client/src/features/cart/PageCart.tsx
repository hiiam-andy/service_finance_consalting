import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { CartList, getCart } from "./cartSlice";

import jwt_decode from "jwt-decode";

export default function PageCart() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const user: any = jwt_decode(String(localStorage.getItem("token")));
    const id = user.id;
    dispatch(getCart(String(id)));
  }, [dispatch]);
  const cart = useAppSelector(CartList);

  let res;
  if (cart.length > 0) {
    res = (
      <ul>
        {cart.map((el) => (
          <li
            key={el.id}
            style={{ border: "1px solid gray", cursor: "pointer" }}
          >
            должен быть продукт с айди {el.productId}
          </li>
        ))}
      </ul>
    );
  }
  return (
    <div>
      <Header />
      {res}
    </div>
  );
}
