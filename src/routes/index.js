import { Route, Routes } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import { ProductPage } from "../pages/Product";
import { ProfilePage } from "../pages/Profile";

export const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};
