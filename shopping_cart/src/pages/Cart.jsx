import React from "react";
import { useCart } from "../context/CartContext";

export function Cart() {
  const { total, cartList, removeToCart } = useCart();
  const handleDelete = (item) => {
    removeToCart(item);
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-10 ">
      <h2 className="text-2xl text-center font-bold">
        Cart Items: {cartList.length} / ${total}
      </h2>
      <div className="flex flex-col  gap-7">
        {cartList?.map((item, key) => {
          return (
            <div
              key={key}
              className="flex justify-between items-center gap-8 shadow-gray-200 shadow-md p-3 px-5"
            >
              <div className="w-44 hidden md:block">
                <img className="rounded-md" src={item.img} alt="" />
              </div>
              <div>
                <p>{item.desc}</p>
              </div>
              <div>
                <h3>{item.rate}</h3>
              </div>
              <div>
                <button
                  onClick={() => handleDelete(item)}
                  className="bg-red-700 py-2 px-4 text-white rounded-md hover:bg-red-900 transition-all ease-in 0.2 cursor-pointer"
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
