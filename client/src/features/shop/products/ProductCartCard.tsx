import {
  Button,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { BASE_URL } from "../../../utils/constats";

interface PropType {
  id?: number;
  name?: string;
  info?: string;
  quantity?: number;
  price?: number;
  img?: string;
}

export default function ProductCartCard({
  img,
  name,
  info,
  price,
  quantity,
}: PropType) {
  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={BASE_URL + "/" + img}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="h1" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="p">
            {info}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="p">
            Цена: {price} Р
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="p">
            Количество: {quantity} шт
          </Typography>
          <Button size="small">Убрать из корзины</Button>
          <Button size="small">Оплатить</Button>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}></Box>
      </Box>
    </Card>
  );
}
