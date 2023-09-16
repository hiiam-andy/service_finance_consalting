import React, { useState } from "react";
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
      <button>добавить бренд</button>
    </div>
  );
}
