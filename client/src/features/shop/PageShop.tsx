import Header from "../../components/header/Header";
import Products from "./products/Products";
import TypesBar from "./types/TypesBar";

export default function PageShop() {
  return (
    <div>
      <Header />
      <TypesBar />
      <Products />
    </div>
  );
}
