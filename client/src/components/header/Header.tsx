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

export default function Header() {
  const userList = useAppSelector(user);
  return (
    <div className={styles.header}>
      <NavLink to={SHOP_ROUTE} className={styles.logo}>
        САМЫЙ КРАСИВЫЙ ЛОГОТИП С НАЗВАНИЕМ МАГАЗИНА
      </NavLink>
      <nav>
        <NavLink to={AUTH_ROUTE} className={styles.link}>
          Авторизация
        </NavLink>
        <NavLink to={CART_ROUTE} className={styles.link}>
          Корзина
        </NavLink>
        {userList.role === "ADMIN" && (
          <NavLink to={ADMIN_ROUTE} className={styles.link}>
            Админ
          </NavLink>
        )}
      </nav>
    </div>
  );
}
