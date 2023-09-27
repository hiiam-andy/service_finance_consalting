import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { CartList, getCart } from "./cartApi/cartSlice";

import jwt_decode from "jwt-decode";
import Cart from "./Cart";
import ProductCartCard from "../shop/products/ProductCartCard";

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
      <ProductCartCard
        key={el.id}
        id={el.id}
        name={el.name}
        img={el.img}
        info={el.info}
        price={el.price}
        quantity={el.quantity}
      />
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
