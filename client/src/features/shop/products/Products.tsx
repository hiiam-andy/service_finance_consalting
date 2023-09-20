import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { ProductList, getProducts } from "./productsSlice";
import { ProductCard } from "./ProductCard";

import styles from "./styles/Products.module.css";
import { selectedTypesList } from "../types/TypeSlice";
import { selectedBrandsList } from "../brands/brandsApi/brandSlice";

export default function Products() {
  const dispatch = useAppDispatch();
  const selectedTypes = useAppSelector(selectedTypesList);
  const selectedBrands = useAppSelector(selectedBrandsList);

  useEffect(() => {
    dispatch(
      getProducts({
        typeId: selectedTypes,
        brandId: selectedBrands,
        page: 1,
        limit: 6,
      })
    );
  }, [dispatch, selectedBrands, selectedTypes]);

  const products = useAppSelector(ProductList);

  const product = products.map((el) => (
    <ProductCard
      key={el.id}
      id={el.id}
      img={el.img}
      info={el.info}
      price={el.price}
      quantity={el.quantity}
    />
  ));

  return <div className={styles.cards}>{product}</div>;
}
