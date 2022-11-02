import { Route, Routes } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import { ProductPage } from "../pages/Product";

export const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/product" element={<ProductPage />} />
    </Routes>
  );
};
