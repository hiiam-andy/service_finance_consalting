import BrandsBar from "../../components/brandBar/BrandsBar";
import Header from "../../components/header/Header";
import TypesBar from "../../components/typeBar/TypesBar";

import Products from "./products/Products";

import styles from "./styles/PageShop.module.css";
import { Container } from "@mui/material";

export default function PageShop() {
  return (
    <>
      <Header />
      <div className={styles.pageShop}>
        <aside>
          <TypesBar />
          <BrandsBar />
        </aside>
        <Container>
          <Products />
        </Container>
      </div>
    </>
  );
}
