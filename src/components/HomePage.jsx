import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ProductCard from "./ProductCard";
import Cart from "./Cart";
import Checkout from "./Checkout";

export default function HomePage({ setView, setToast }) {
  const [category, setCategory] = useState(null);
  const [cart, setCart] = useState([]);

  const categories = [
    { title: "Men’s Clothing", key: "Men" },
    { title: "Women’s Clothing", key: "Women" },
    { title: "Kids’ Collection", key: "Kids" },
    { title: "Electronics", key: "Electronics" },
  ];

  const products = [ 
    {  name: "Men's T-Shirt",
       desc: "Comfort fit | 100% cotton", price: 799, 
       category: "Men"
      
     },
    { name: "Men's T-Shirt", desc: "Comfort fit | 100% cotton", price: 799, category: "Men" },
    { name: "Men's T-Shirt", desc: "Comfort fit | 100% cotton", price: 799, category: "Men" },
    { name: "Men's T-Shirt", desc: "Comfort fit | 100% cotton", price: 899, category: "Men" },
    { name: "Men's T-Shirt", desc: "Comfort fit | 100% cotton", price: 799, category: "Men" },
    { name: "Men's T-Shirt", desc: "Comfort fit | 100% cotton", price: 799, category: "Men" },
    { name: "Men's T-Shirt", desc: "Comfort fit | 100% cotton", price: 899, category: "Men" },
    { name: "Women's Dress", desc: "Stylish summer dress", price: 1000, category: "Women" },
    { name: "Women's Dress", desc: "Stylish summer dress", price: 1200, category: "Women" },
    { name: "Women's Dress", desc: "Stylish summer dress", price: 1000, category: "Women" },
    { name: "Women's Dress", desc: "Stylish summer dress", price: 1200, category: "Women" },
    { name: "Women's Dress", desc: "Stylish summer dress", price: 1000, category: "Women" },
    { name: "Women's Dress", desc: "Stylish summer dress", price: 1200, category: "Women" },
    { name: "Women's Dress", desc: "Stylish summer dress", price: 1000, category: "Women" },
    { name: "Women's Dress", desc: "Stylish summer dress", price: 1000, category: "Women" },
    { name: "Kids Jacket", desc: "Warm and cozy", price: 700, category: "Kids" },
    { name: "Kids Jacket", desc: "Warm and cozy", price: 700, category: "Kids" },
    { name: "Kids Jacket", desc: "Warm and cozy", price: 700, category: "Kids" },
    { name: "Kids Jacket", desc: "Warm and cozy", price: 700, category: "Kids" },
    { name: "Kids Jacket", desc: "Warm and cozy", price: 700, category: "Kids" },
    { name: "Kids Jacket", desc: "Warm and cozy", price: 700, category: "Kids" },
    { name: "Kids Jacket", desc: "Warm and cozy", price: 700, category: "Kids" },
    { name: "Kids Jacket", desc: "Warm and cozy", price: 700, category: "Kids" },
    { name: "Wireless Earbuds", desc: "Noise cancelling", price: 1500, category: "Electronics" },
    { name: "Wireless Earbuds", desc: "Noise cancelling", price: 1500, category: "Electronics" },
    { name: "Wireless Earbuds", desc: "Noise cancelling", price: 1500, category: "Electronics" },
    { name: "Wireless Earbuds", desc: "Noise cancelling", price: 1500, category: "Electronics" },
    { name: "Wireless Earbuds", desc: "Noise cancelling", price: 1500, category: "Electronics" },
    { name: "Wireless Earbuds", desc: "Noise cancelling", price: 1500, category: "Electronics" },
  ]

  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (index) =>
    setCart(cart.filter((_, i) => i !== index));

  return (
    <div className="home-page">
      <Sidebar setCategory={setCategory} />

      <div className="main-content">
        <h2>Welcome to Cashback Agent Panel 🎉</h2>

        <div className="categories">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setCategory(cat.key)}
              className={category === cat.key ? "active-category" : ""}
            >
              {cat.title}
            </button>
          ))}
          <button onClick={() => setCategory(null)}>All</button>
        </div>

        <div className="product-grid">
          {filteredProducts.map((p, i) => (
            <ProductCard key={i} product={p} addToCart={addToCart} />
          ))}
        </div>

        <Cart cartItems={cart} removeFromCart={removeFromCart} />
        <Checkout cartItems={cart} setToast={setToast} />

        <button
          className="logout-btn"
          onClick={() => {
            setToast("Logged out successfully");
            setView("login");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// import ProductCard from "./ProductCard";
// import Cart from "./Cart";
// import Checkout from "./Checkout";

// export default function HomePage({ setView, setToast }) {
//   const [category, setCategory] = useState(null);
//   const [cart, setCart] = useState([]);

//   const products = [
//     { name: "Men's T-Shirt", desc: "100% cotton", price: 799, category: "Men" },
//     { name: "Women's Dress", desc: "Summer style", price: 1200, category: "Women" },
//     { name: "Kids Jacket", desc: "Warm and cozy", price: 700, category: "Kids" },
//     { name: "Wireless Earbuds", desc: "Noise cancelling", price: 1500, category: "Electronics" },
//     // Add more as needed
//   ];

//   const filteredProducts = category
//     ? products.filter((p) => p.category === category)
//     : products;

//   const addToCart = (product) => setCart([...cart, product]);
//   const removeFromCart = (index) =>
//     setCart(cart.filter((_, i) => i !== index));

//   return (
//     <div style={styles.container}>
//       {/* ✅ Top Bar */}
//       <header style={styles.topBar}>
//         <h1 style={styles.logo}>🛒 My Shop</h1>
//         <button
//           style={styles.logoutButton}
//           onClick={() => {
//             setToast("Logged out successfully");
//             setView("login");
//           }}
//         >
//           Logout
//         </button>
//       </header>

//       {/* ✅ Body: Sidebar + Content */}
//       <div style={styles.body}>
//         {/* Sidebar */}
//         <aside style={styles.sidebar}>
//           <h3 style={styles.sidebarTitle}>Categories</h3>
//           <button style={styles.sidebarButton} onClick={() => setCategory("Men")}>Men</button>
//           <button style={styles.sidebarButton} onClick={() => setCategory("Women")}>Women</button>
//           <button style={styles.sidebarButton} onClick={() => setCategory("Kids")}>Kids</button>
//           <button style={styles.sidebarButton} onClick={() => setCategory(null)}>All</button>
//         </aside>

//         {/* Main Content */}
//         <main style={styles.content}>
//           <h2>{category ? `${category} Products` : "All Products"}</h2>

//           <div style={styles.grid}>
//             {filteredProducts.map((product, index) => (
//               <ProductCard key={index} product={product} addToCart={addToCart} />
//             ))}
//           </div>

//           <Cart cartItems={cart} removeFromCart={removeFromCart} />
//           <Checkout cartItems={cart} setToast={setToast} />
//         </main>
//       </div>
//     </div>
//   );
// }

// // ✅ Styles for desktop layout
// const styles = {
//   container: {
//     fontFamily: "Arial, sans-serif",
//     height: "100vh",
//     display: "flex",
//     flexDirection: "column"
//   },
//   topBar: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "16px 24px",
//     backgroundColor: "#343a40",
//     color: "#fff"
//   },
//   logo: {
//     fontSize: "24px",
//     margin: 0
//   },
//   logoutButton: {
//     padding: "8px 16px",
//     backgroundColor: "#dc3545",
//     color: "#fff",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer"
//   },
//   body: {
//     display: "flex",
//     flexGrow: 1
//   },
//   sidebar: {
//     width: "200px",
//     backgroundColor: "#f8f9fa",
//     padding: "20px",
//     borderRight: "1px solid #dee2e6",
//     boxSizing: "border-box"
//   },
//   sidebarTitle: {
//     marginBottom: "16px",
//     fontSize: "18px"
//   },
//   sidebarButton: {
//     width: "100%",
//     padding: "10px",
//     marginBottom: "10px",
//     backgroundColor: "#ffffff",
//     border: "1px solid #ced4da",
//     borderRadius: "4px",
//     cursor: "pointer",
//     textAlign: "left"
//   },
//   content: {
//     flexGrow: 1,
//     padding: "24px",
//     overflowY: "auto"
//   },
//   grid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
//     gap: "20px",
//     marginTop: "20px"
//   }
// };
