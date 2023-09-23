import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { CartList } from "./cartSlice";
import { getProduct } from "../product/productSlice";

export default function Cart() {
  const cart = useAppSelector(CartList);
  const dispatch = useAppDispatch();

  console.log(cart[0]);

  let res: any;
  if (cart.length > 0) {
    res = cart.map((el) => {
      dispatch(getProduct(Number(el.productId)));
      return <div>{}</div>;
    });
  }

  return <ul>{res}</ul>;
}
