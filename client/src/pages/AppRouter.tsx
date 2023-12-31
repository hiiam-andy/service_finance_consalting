import { Navigate, Route, Routes } from "react-router-dom";
import PageShop from "../features/shop/PageShop";
import PageAuth from "../features/auth/PageAuth";
import PageAdmin from "../features/admin/PageAdmin";
import PageCart from "../features/cart/PageCart";
import PageProduct from "../features/product/PageProduct";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/shop" element={<PageShop />} />
      <Route path="/product/:id" element={<PageProduct />} />
      <Route path="/auth" element={<PageAuth />} />
      <Route path="/admin" element={<PageAdmin />} />
      <Route path="/cart" element={<PageCart />} />
      <Route path="*" element={<Navigate to="/shop" replace />} />
    </Routes>
  );
}
