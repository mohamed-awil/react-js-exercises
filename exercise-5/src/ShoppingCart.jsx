import { useState } from "react";

function ShoppingCart() {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  function handleAddProduct() {
    if (productName.trim() !== "" && productPrice.trim() !== "") {
      const newProduct = {
        id: Date.now(),
        name: productName,
        price: parseFloat(productPrice),
        quantity: 1,
      };

      setProducts([...products, newProduct]);

      console.log(newProduct);

      setProductName("");
      setProductPrice("");
    }
  }

  function removeProduct(id) {
    const filtredProducts = products.filter((product) => product.id !== id);
    setProducts(filtredProducts);
  }

  function increaseQuantitiy(id) {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      ),
    );
  }

  function decreaseQuantitiy(id) {
    setProducts(
      products.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product,
      ),
    );
  }

  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );

  return (
    <div>
      <h2>Simple Shopping cart</h2>
      <h3>Add to Cart</h3>
      <div>
        <input
          type="text"
          placeholder="Add a product Name "
          onChange={(event) => setProductName(event.target.value)}
          value={productName}
        />
        <input
          type="number"
          placeholder="Add a Product Price"
          onChange={(event) => setProductPrice(event.target.value)}
          value={productPrice}
          min={0}
        />
        <button onClick={handleAddProduct}>add Product</button>
      </div>

      <div>
        {products.length > 0 ? (
          <div>
            <ul>
              {products.map((product) => (
                <li key={product.id}>
                  <strong>{product.name}</strong> - ${product.price.toFixed(2)}
                  <div>
                    Quantity:
                    <button onClick={() => decreaseQuantitiy(product.id)}>
                      -
                    </button>
                    {product.quantity}
                    <button onClick={() => increaseQuantitiy(product.id)}>
                      +
                    </button>
                  </div>
                  <button onClick={() => removeProduct(product.id)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <h4>Total Price: ${totalPrice}</h4>
          </div>
        ) : (
          <p>The cart is empty</p>
        )}
      </div>
    </div>
  );
}

export default ShoppingCart;
