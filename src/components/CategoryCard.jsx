
import React from "react";

export default function CategoryCard({ title, emoji, onClick }) {
  return (
    <div className="category-card" onClick={onClick}>
      <span className="emoji">{emoji}</span>
      <h4>{title}</h4>
    </div>
  );
}



  