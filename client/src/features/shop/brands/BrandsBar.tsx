import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  BrandsList,
  getBrands,
  setSelectedBrand,
} from "./brandsApi/brandSlice";
import styles from "./styles/Brand.module.css";

export default function BrandsBar() {
  const brands = useAppSelector(BrandsList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  return (
    <div>
      <strong>Выберите бренд</strong>
      <ul>
        <li
          className={styles.brand_link}
          onClick={() => dispatch(setSelectedBrand(null))}
        >
          Показать все
        </li>
        {brands.map((el) => (
          <li
            key={el.id}
            className={styles.brand_link}
            onClick={() => dispatch(setSelectedBrand(el.id))}
          >
            {el.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
