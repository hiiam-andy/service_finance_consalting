import { FC, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "../pages/AppRouter";
import "./styles.css";
import { useAppDispatch } from "./hooks";
import { setIsAuth, setUser } from "../features/auth/http/authSlice";
import { check } from "../features/auth/http/authApi";

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      check().then((user) => {
        dispatch(setIsAuth(true));
        dispatch(setUser(user));
      });
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
