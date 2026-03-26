import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import { routes } from "./routes";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import Order from "../pages/Order";
import Product from "../pages/Product";

function AppRoutes() {
  return (
    <section>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path={routes.HOME} element={<Home />} />
          <Route path={routes.FAVORITES} element={<Favorites />} />
          <Route path={routes.ORDER} element={<Order />} />
          <Route path={routes.PRODUCTS} element={<Product />} />
        </Route>
      </Routes>
    </section>
  );
}

export default AppRoutes;
