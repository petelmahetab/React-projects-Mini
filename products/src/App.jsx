import React, { useState, useEffect } from "react";
import "./App.css"; // Import the CSS file

function App() {
  const [products, setProducts] = useState([]);

  // Function to fetch products
  async function fetchProducts() {
    try {
      const req = await fetch(
        "https://fakestoreapi.com/products/category/electronics"
      );
      const data = await req.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container">
      {products.map((item, id) => (
        <div key={id} className="card">
          <img src={item.image} alt={item.title} className="product-image" />
          <h1 className="product-title">{item.title}</h1>
          <h3 className="product-price">${item.price}</h3>
          <p className="product-category">{item.category}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
