import React from "react";

export default function Cart({ cartItems, removeFromCart }) {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      <h3>My Cart</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, i) => (
              <li key={i}>
                {item.name} - ₹{item.price} 
                <button onClick={() => removeFromCart(i)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: ₹{total}</p>
        </>
      )}
    </div>
  );
}
