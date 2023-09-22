import { NavLink } from "react-router-dom";
import { BASE_URL } from "../../../utils/constats";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import "./styles/ProductCard.css";

interface PropType {
  id: number;
  img: string;
  info: string;
  price: number;
  quantity: number;
}

export const ProductCard = ({ id, img, info, price, quantity }: PropType) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }} className="product-card">
        <NavLink to={`/product/${id}`}>
          <CardMedia
            component="img"
            alt="img"
            height="140"
            image={BASE_URL + "/" + img}
          />
          <CardContent style={{ paddingBottom: "0" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="card_description__price"
            >
              Цена: {price}р
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Описание: {info}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Осталось: {quantity}шт
            </Typography>
          </CardContent>
        </NavLink>
        <CardActions>
          <Button size="small">В корзину</Button>
        </CardActions>
      </Card>
    </>
  );
};
