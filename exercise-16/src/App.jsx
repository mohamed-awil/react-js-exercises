import React, { useState } from "react";
import { ProductsList } from "./ProductsList";
import ProductsContext from "./ProductsContext";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 400 },
    { id: 2, name: "Taplet", price: 390 },
    { id: 3, name: "Phone", price: 800 },
    { id: 2, name: "Power Bank", price: 40 },
  ]);

  const [cart, setCart] = useState([]);

  return (
    <ProductsContext.Provider value={{ products, cart, setCart }}>
      <ProductsList />
    </ProductsContext.Provider>
  );
}

export default App;
