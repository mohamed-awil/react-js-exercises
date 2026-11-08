import { useContext } from "react";
import ProductsContext from "./ProductsContext";
import { CartSummary } from "./CartSummary";

export const ProductsList = () => {
  const { products, cart, setCart } = useContext(ProductsContext);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <>
      <ul style={{listStyle: "none"}}>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: "20px" }}>
            <span>{product.name}</span>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <CartSummary />
    </>
  );
};
