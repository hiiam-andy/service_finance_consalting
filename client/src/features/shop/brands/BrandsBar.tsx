import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { BrandsList, getBrands } from "./brandsApi/brandSlice";

export default function BrandsBar() {
  const brands = useAppSelector(BrandsList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  return (
    <ul style={{ display: "flex" }}>
      {brands.map((el) => (
        <li key={el.id} style={{ border: "1px solid gray", cursor: "pointer" }}>
          {el.name}
        </li>
      ))}
    </ul>
  );
}
