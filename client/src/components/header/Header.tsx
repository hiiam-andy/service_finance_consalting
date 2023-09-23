import React from "react";
import { NavLink } from "react-router-dom";
import {
  ADMIN_ROUTE,
  AUTH_ROUTE,
  CART_ROUTE,
  SHOP_ROUTE,
} from "../../utils/constats";
import styles from "./Header.module.css";
import { useAppSelector } from "../../app/hooks";
import { user } from "../../features/auth/http/authSlice";
import { IconButton, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { CartList } from "../../features/cart/cartSlice";
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function Header() {
  const userList = useAppSelector(user);
  const cart = useAppSelector(CartList);

  return (
    <div className={styles.header}>
      <NavLink to={SHOP_ROUTE} className={styles.logo}>
        КРАСИВЫЙ ЛОГОТИП
      </NavLink>
      <nav>
        <NavLink to={AUTH_ROUTE} className={styles.link}>
          Авторизация
        </NavLink>
        <NavLink to={CART_ROUTE} className={styles.link}>
          <span>Корзина</span>
          <IconButton aria-label="cart" disabled>
            <StyledBadge badgeContent={cart.length} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </NavLink>
        {userList && userList.role === "ADMIN" && (
          <NavLink to={ADMIN_ROUTE} className={styles.link}>
            Админ
          </NavLink>
        )}
      </nav>
    </div>
  );
}
