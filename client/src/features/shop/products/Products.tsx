import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { ProductList, getProducts } from "./productsSlice";
import { ProductCard } from "./ProductCard";

export default function Products() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const products = useAppSelector(ProductList);

  const product = products.map((el) => (
    <ProductCard
      key={el.id}
      img={el.img}
      info={el.info}
      price={el.price}
      quantity={el.quantity}
    />
  ));

  return <div>{product}</div>;
}
