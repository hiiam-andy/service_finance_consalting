import { useState } from "react";
import { login, registration } from "./http/authApi";
import { useAppDispatch } from "../../app/hooks";
import { setIsAuth, setUser } from "./http/authSlice";
import { useNavigate } from "react-router-dom";
import { SHOP_ROUTE } from "../../utils/constats";
import styles from "./styles/AuthForm.module.css";

export default function AuthForm() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState(true);

  const loginUser = async (email: string, password: string) => {
    try {
      const newUser: any = await login(email, password);
      if (newUser) {
        dispatch(setIsAuth(true));
        dispatch(setUser(newUser));
        localStorage.getItem(newUser.id);
        navigate(SHOP_ROUTE);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const registrationUser = async (email: string, password: string) => {
    try {
      const newUser: any = await registration(email, password);
      if (newUser) {
        dispatch(setIsAuth(true));
        dispatch(setUser(newUser));
        localStorage.getItem(newUser.id);
        navigate(SHOP_ROUTE);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.form}>
      <h1>{toggle ? "Авторизация" : "Регистрация"}</h1>
      <div>
        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        {toggle ? "Нет аккаунта?" : "Есть аккаунт?"}{" "}
        <span
          onClick={() => setToggle(!toggle)}
          style={{ cursor: "pointer", color: "blue" }}
        >
          {toggle ? "Зарегистрировать" : "Войти"}
        </span>
      </div>
      {toggle ? (
        <button onClick={() => loginUser(email, password)}>Войти</button>
      ) : (
        <button onClick={() => registrationUser(email, password)}>
          Регистрация
        </button>
      )}
    </div>
  );
}
