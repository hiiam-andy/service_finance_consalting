import { NavLink } from "react-router-dom";
import MyButton from "../../../components/myButton/MyButton";
import { BASE_URL } from "../../../utils/constats";
import styles from "./styles//ProductCard.module.css";

interface PropType {
  id: number;
  img: string;
  info: string;
  price: number;
  quantity: number;
}

export const ProductCard = ({ id, img, info, price, quantity }: PropType) => {
  return (
    <NavLink to={`/product${id}`} className={styles.card}>
      <img className={styles.image} src={BASE_URL + "/" + img} alt="img" />
      <div className={styles.card_description}>
        <div className={styles.card_price}>{price} р</div>
        <div className={styles.card_info}>Описание: {info}</div>
        <div className={styles.card_info}>Осталось: {quantity}шт</div>
        <span className={styles.card_btn}>
          <MyButton>В корзину</MyButton>
        </span>
      </div>
    </NavLink>
  );
};
