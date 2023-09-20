import React from "react";
import { useAppSelector } from "../../app/hooks";
import { CartList } from "./cartSlice";

export default function Cart() {
  const cart = useAppSelector(CartList);
  let res;
  if (cart.length > 0) {
    res = cart.map((el) => (
      <ul>
        <li key={el.id} style={{ border: "1px solid gray", cursor: "pointer" }}>
          должен быть продукт с айди {el.productId}
        </li>
      </ul>
    ));
  }

  return <div>{res}</div>;
}
