import React from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export function Header() {
  const { cartList } = useCart();
  return (
    <nav className="flex justify-between items-center max-w-7xl mx-auto p-3 ">
      <Link to={"/"} className="flex justify-center items-center gap-2">
        <img className="w-10" src={logo} alt="" />
        <p className="text-xl font-semibold">Shopping Cart</p>
      </Link>
      <div className="hidden md:flex justify-center items-center gap-7 text-xl font-semibold ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-1 rounded-md ${
              isActive ? "bg-gray-200 text-black" : "text-gray-700"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `px-4 py-1 rounded-md ${
              isActive ? "bg-gray-200 text-black" : "text-gray-700"
            }`
          }
        >
          Cart
        </NavLink>
      </div>
      <Link to={"/cart"}>
        <p className="text-xl font-bold">Cart: {cartList.length}</p>
      </Link>
    </nav>
  );
}
