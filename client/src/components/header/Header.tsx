import React from "react";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, AUTH_ROUTE, SHOP_ROUTE } from "../../utils/constats";
import styles from "./Header.module.css";
import { useAppSelector } from "../../app/hooks";
import { user } from "../../features/auth/http/authSlice";

export default function Header() {
  const userList = useAppSelector(user);
  return (
    <div className={styles.header}>
      <div>САМЫЙ КРАСИВЫЙ ЛОГОТИП</div>
      <nav>
        <NavLink to={SHOP_ROUTE}>Магазин</NavLink>
        <NavLink to={AUTH_ROUTE}>Авторизация</NavLink>
        {userList.role === "ADMIN" && <NavLink to={ADMIN_ROUTE}>Админ</NavLink>}
      </nav>
    </div>
  );
}
