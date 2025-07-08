import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export function Card({ product }) {
  const [isInCart, setInCart] = useState(false);
  const { addToCart, cartList, removeToCart } = useCart();
  console.log(cartList);
  const handleAdd = () => {
    addToCart(product);
    console.log(product);
  };
  useEffect(() => {
    const productInCartList = cartList.find(
      (cartItem) => cartItem.id === product.id
    );
    if (productInCartList) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [cartList, product.id]);
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm mx-auto">
      <img
        className="rounded-t-lg h-64 w-full"
        src={product.img}
        alt="product"
      />
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900">
          {product.desc}
        </h5>
        <div className="flex items-center justify-between mt-5">
          <span className="text-2xl font-bold text-gray-700">
            {product.rate}
          </span>
          {isInCart ? (
            <button
              onClick={() => removeToCart(product)}
              className="bg-red-700 text-white px-5 py-2 rounded-lg text-sm"
            >
              Remove
            </button>
          ) : (
            <button
              onClick={handleAdd}
              className="bg-blue-700 text-white px-5 py-2 rounded-lg text-sm"
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
