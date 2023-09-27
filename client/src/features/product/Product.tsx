import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { OneProductList, getProduct } from "./productSlice";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../utils/constats";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

export default function Product() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getProduct(Number(id)));
  }, [dispatch, id]);
  const product: any = useAppSelector(OneProductList) ?? [];

  return (
    <Container>
      <Card sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          sx={{ width: 500 }}
          image={`${BASE_URL}/${product?.img}`}
          alt="product image"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {product.name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {product.info}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Стоимость: {product.price}р
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
            >
              На складе осталось: {product.quantity}шт
            </Typography>
          </CardContent>

          <CardActions>
            <Button size="small">Добавить в корзину</Button>
          </CardActions>
        </Box>
      </Card>
    </Container>
  );
}
