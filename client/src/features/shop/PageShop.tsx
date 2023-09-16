import Header from "../../components/header/Header";
import BrandsBar from "./brands/BrandsBar";
import Products from "./products/Products";
import TypesBar from "./types/TypesBar";

export default function PageShop() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <TypesBar />
        <div>
          <BrandsBar />
          <Products />
        </div>
      </div>
    </div>
  );
}
