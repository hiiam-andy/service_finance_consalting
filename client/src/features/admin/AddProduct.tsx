import React, { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { BrandsList } from "../shop/brands/brandsApi/brandSlice";
import { TypesList } from "../shop/types/TypeSlice";
import { addProduct } from "./adminApi/adminApi";

export default function AddProduct() {
  const types = useAppSelector(TypesList);
  const brands = useAppSelector(BrandsList);

  const [typeValue, setTypeValue] = useState(0);
  const [brandValue, setBrandValue] = useState(0);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [info, setInfo] = useState("");
  const [quantity, setQuantity] = useState("");
  // const [img, setImg] = useState(undefined);

  let img: File;
  const addImg = (e: any) => {
    img = e.target.files[0];
  };

  const createProduct = () => {
    const fd = new FormData();
    fd.append("name", name);
    fd.append("price", `${price}`);
    fd.append("info", info);
    fd.append("quantity", quantity);
    fd.append("brandId", `${brandValue}`);
    fd.append("typeId", `${typeValue}`);
    fd.append("img", img);
    addProduct(fd);
    setName("");
    setPrice("");
    setInfo("");
    setQuantity("");
  };

  return (
    <div>
      <select
        value={typeValue}
        onChange={(e) => {
          setTypeValue(Number(e.target.value));
        }}
      >
        <option>--Выберите тип--</option>
        {types.map((el) => (
          <option key={el.id} value={el.id}>
            {el.name}
          </option>
        ))}
      </select>
      <select
        value={brandValue}
        onChange={(e) => {
          setBrandValue(Number(e.target.value));
        }}
      >
        <option>--Выберите бренд--</option>
        {brands.map((el) => (
          <option key={el.id} value={el.id}>
            {el.name}
          </option>
        ))}
      </select>
      <input
        placeholder="Название"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Цена"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        placeholder="Описание"
        value={info}
        onChange={(e) => setInfo(e.target.value)}
      />
      <input
        placeholder="Количество"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <input type="file" onChange={addImg} />
      <button onClick={() => createProduct()}>Добавить Продукт</button>
    </div>
  );
}
