import { useState } from "react";
import { login } from "./http/authApi";
import { useAppDispatch } from "../../app/hooks";
import { setIsAuth, setUser } from "./http/authSlice";
import { useNavigate } from "react-router-dom";
import { SHOP_ROUTE } from "../../utils/constats";

export default function AuthForm() {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  return (
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
      <button onClick={() => loginUser(email, password)}>Войти</button>
    </div>
  );
}
