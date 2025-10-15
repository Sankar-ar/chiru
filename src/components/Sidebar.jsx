// import React from "react";

// export default function Sidebar({ setCategory }) {
//   return (
//     <div className="sidebar">
//       <h3>Categories</h3>
//       <ul>
//         <li onClick={() => setCategory("Men")}>Men’s Clothing 👔</li>
//         <li onClick={() => setCategory("Women")}>Women’s Clothing 👗</li>
//         <li onClick={() => setCategory("Kids")}>Kids’ Collection 🧒</li>
//         <li onClick={() => setCategory("Electronics")}>Electronics 🔌</li>
//       </ul>
//     </div>
//   );
// }



import React from "react";

export default function Sidebar({ setCategory }) {
  const categories = [
    { title: "Men’s Clothing", key: "Men" },
    { title: "Women’s Clothing", key: "Women" },
    { title: "Kids’ Collection", key: "Kids" },
    { title: "Electronics", key: "Electronics" },
  ];

  return (
    <div className="sidebar">
      <h3>Categories</h3>
      {categories.map((cat) => (
        <button
          key={cat.key}
          onClick={() => setCategory(cat.key)}
        >
          {cat.title}
        </button>
      ))}
      <button onClick={() => setCategory(null)}>All</button>
    </div>
  );
}
