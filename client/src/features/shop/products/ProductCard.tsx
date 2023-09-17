import { BASE_URL } from "../../../utils/constats";
import styles from "./ProductCard.module.css";

interface PropType {
  img: string;
  info: string;
  price: number;
  quantity: number;
}

export const ProductCard = ({ img, info, price, quantity }: PropType) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={BASE_URL + "/" + img} alt="img" />
      <div>Описание: {info}</div>
      <div>Цена: {price}р</div>
      <div>Количество: {quantity}шт</div>
      <button>В корзину</button>
    </div>
  );
};
