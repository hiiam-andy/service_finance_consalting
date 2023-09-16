import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { ProductList, getProducts } from "./productsSlice";

export default function Products() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const products = useAppSelector(ProductList);

  // const product = products.map((el) => <div>{el.name}</div>);

  return <div>Products</div>;
}
