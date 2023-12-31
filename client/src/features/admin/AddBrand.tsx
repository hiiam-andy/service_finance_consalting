import { useState } from "react";
import { addBrand } from "../../components/brandBar/brandsApi/brandsApi";

export default function AddBrand() {
  const [brand, setBrand] = useState("");
  return (
    <div>
      {" "}
      <input
        placeholder="название бренда"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />
      <button
        onClick={() => {
          addBrand(brand.toLowerCase());
          setBrand("");
        }}
      >
        добавить бренд
      </button>
    </div>
  );
}
