import React, { useState } from "react";
import { addType } from "../shop/types/typesApi/typesApi";

export default function AdminForm() {
  // name, price, info, quantity, brandId, typeId
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");

  return (
    <div>
      <div>
        <input
          placeholder="название типа"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <button
          onClick={() => {
            addType(type.toLowerCase());
            setType("");
          }}
        >
          Добавить тип
        </button>
        <input
          placeholder="название бренда"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <button>добавить бренд</button>
      </div>
      <div>
        <input placeholder="Название" />
        <input placeholder="Цена" />
        <input placeholder="Информация" />
        <input placeholder="Количество" />
      </div>
    </div>
  );
}
