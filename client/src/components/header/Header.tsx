import { NavLink } from "react-router-dom";
import {
  ADMIN_ROUTE,
  AUTH_ROUTE,
  CART_ROUTE,
  SHOP_ROUTE,
} from "../../utils/constats";
import { useAppSelector } from "../../app/hooks";
import { user, userIsAuth } from "../../features/auth/http/authSlice";
import { IconButton, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge, { BadgeProps } from "@mui/material/Badge";

import LOGO from "../../utils/pngwing.com.png";
import styles from "./Header.module.css";

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
  const isAuth = useAppSelector(userIsAuth);
  console.log(isAuth);

  return (
    <div className={styles.header}>
      <NavLink to={SHOP_ROUTE} className={styles.logo}>
        <img src={LOGO} alt="logo" style={{ maxHeight: "50px" }} />
        КРАСИВОЕ НАЗВАНИЕ МАГАЗИНА
      </NavLink>
      <nav>
        <NavLink to={AUTH_ROUTE} className={styles.link}>
          Авторизация
        </NavLink>
        {isAuth && (
          <NavLink to={CART_ROUTE} className={styles.link}>
            <span>Корзина</span>
            <IconButton aria-label="cart" disabled>
              <StyledBadge badgeContent={0} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </NavLink>
        )}
        {userList && userList.role === "ADMIN" && (
          <NavLink to={ADMIN_ROUTE} className={styles.link}>
            Админ
          </NavLink>
        )}
      </nav>
    </div>
  );
}
