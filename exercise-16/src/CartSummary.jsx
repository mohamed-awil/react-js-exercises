import React from "react";
import ProductsContext from "./ProductsContext";
import { useContext } from "react";

export const CartSummary = () => {
  const { cart, setCart } = useContext(ProductsContext);

  function removeItem(id) {
    setCart(cart.filter((item) => item.id !== id));
  }
  return (
    <div>
      <h2>Cart Summary</h2>
      <p>Total items: {cart.length}</p>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}{" "}
            <button onClick={() => removeItem(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
