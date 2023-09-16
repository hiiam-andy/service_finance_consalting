import React from "react";
import { BASE_URL } from "../../../utils/constats";

interface PropType {
  img: string;
  info: string;
  price: number;
  quantity: number;
}

export const ProductCard = ({ img, info, price, quantity }: PropType) => {
  return (
    <div>
      <img src={BASE_URL + "/" + img} alt="img" />
      <div>Описание: {info}</div>
      <div>Цена: {price}р</div>
      <div>Количество: {quantity}шт</div>
    </div>
  );
};
