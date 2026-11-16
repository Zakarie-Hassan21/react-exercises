import { useState } from "react";
const ShoppingCart = () => {
  const [productInput, setProductInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [cart, setCart] = useState([]);
  const handleCartAdd = () => {
    if ((productInput.trim() !== ("") && priceInput.trim() !== "")) {
      const newProduct = {
        id: Date.now(),
        productName: productInput,
        price: parseFloat(priceInput),
        quantity: 1
      };
      setCart([...cart, newProduct]);
      setPriceInput("");
      setProductInput("");
    }
  };
  const removeCart = (id) => {
  const updatedCart = cart.filter(product => product.id !== id)
  setCart(updatedCart)
}

  const increaseQuantity = (id) => {
    const updatedCart = cart.map(cart => (
      cart.id === id ? {...cart, quantity : cart.quantity + 1} : cart
    ))
    setCart(updatedCart)
  }

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map(cart => (
      cart.id === id  && cart.quantity > 1 ? {...cart, quantity : cart.quantity -1} :cart
    ))
    setCart(updatedCart)
  }
  const totalPrice = cart.reduce((total, product)=> total + product.price * product.quantity ,0)

  return (
    <>
      <div>
        <h1>Simple Shopping Cart</h1>
        <h2>Add Product</h2>
        <div>
          <input
            type="text"
            placeholder="Add Product"
            onChange={(e) => setProductInput(e.target.value)}
            value={productInput}
          />
          <input
            min="0"
            type="number"
            placeholder="Price"
            onChange={(e) => setPriceInput(e.target.value)}
            value={priceInput}
          />
          <button onClick={handleCartAdd}>Add to Cart</button>
        </div>
            {
                cart.length > 0 ? (
                    <div>
                      <h3>Products in Cart</h3>
                   <ul>
                    {
                        cart.map((product) => (
                            <li key={product.id}>
                                <strong>{product.productName}</strong> - ${product.price.toFixed(2)} <br /> 
                                <div>
                                  Quantiy: 
                                  <button onClick={() => decreaseQuantity(product.id)}>-</button>
                                  {product.quantity} 
                                  <button onClick={() => increaseQuantity(product.id)}>+</button>
                                </div>
                                <div>
                                <button onClick={() => removeCart(product.id)}>Remove</button>
                                </div>
                            </li>
                        ))
                    }
                   </ul>
                    </div>    
                ): <p>Cart is empty.</p>
            }
            <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
      </div>
    </>
  );
};
export default ShoppingCart;
