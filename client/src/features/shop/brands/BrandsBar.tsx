import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  BrandsList,
  getBrands,
  setSelectedBrand,
} from "./brandsApi/brandSlice";

export default function BrandsBar() {
  const brands = useAppSelector(BrandsList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  return (
    <div>
      <strong>Выберите бренд</strong>
      <ul style={{ display: "flex" }}>
        <li
          style={{ border: "1px solid gray", cursor: "pointer" }}
          onClick={() => dispatch(setSelectedBrand(null))}
        >
          Показать все
        </li>
        {brands.map((el) => (
          <li
            key={el.id}
            style={{ border: "1px solid gray", cursor: "pointer" }}
            onClick={() => dispatch(setSelectedBrand(el.id))}
          >
            {el.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
