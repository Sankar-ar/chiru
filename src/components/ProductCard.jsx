import React from "react";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <h4>{product.name}</h4>
      <p>{product.desc}</p>
      <p>Price: ₹{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}
