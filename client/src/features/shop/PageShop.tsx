import Header from "../../components/header/Header";
import BrandsBar from "./brands/BrandsBar";
import Products from "./products/Products";
import TypesBar from "./types/TypesBar";
import styles from "./styles/PageShop.module.css";

export default function PageShop() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.pageShop}>
        <div>
          <TypesBar />
          <BrandsBar />
        </div>
        <div style={{ marginLeft: "15px" }}>
          <Products />
        </div>
      </div>
    </div>
  );
}
