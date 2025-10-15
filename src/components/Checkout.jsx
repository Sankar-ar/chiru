import React from "react";

export default function Checkout({ cartItems, setToast }) {
  const handlePlaceOrder = () => {
    if (cartItems.length === 0) return setToast("Cart is empty");
    setToast("Order placed successfully!");
  };

  return (
    <div className="checkout">
      <h3>Checkout</h3>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
}


