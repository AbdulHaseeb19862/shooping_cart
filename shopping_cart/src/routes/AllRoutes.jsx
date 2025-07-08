import React from "react";
import { Route, Routes } from "react-router-dom";
import { Cart, Home } from "../pages";

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/cart" element={<Cart />}>
          Cart
        </Route>
      </Routes>
    </>
  );
}

export default AllRoutes;
