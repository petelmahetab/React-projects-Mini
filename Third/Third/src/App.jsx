import React, { useEffect, useState } from 'react';
import './App.css'; // Import the CSS file

function App() {
  // State for the Products
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  // Fetch the Products through API
  const getProduct = async () => {
    const api = await fetch('https://dummyjson.com/products');
    const data = await api.json();
    if (data && data.products) {
      setProducts(data.products);
    }
  };

  // UseEffect for fetching products
  useEffect(() => {
    getProduct();
  }, []);

  // Calculate the products for the current page.
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle Next and Previous buttons
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="app-container">
      {currentProducts.length > 0 && (
        <div className="products">
          {currentProducts.map((pro) => (
            <div key={pro.id} className="product-details">
              <img src={pro.thumbnail} alt={pro.title} className="product-image" />
              <span className="product-title">{pro.title}</span>
            </div>
          ))}
        </div>
      )}

      {products.length > 0 && (
        <div className="paging">
          <span className="paging-arrow" onClick={handlePrevious}>
            ⬅️
          </span>
          <span className="paging-numbers">
            {[...Array(totalPages)].map((_, i) => (
              <span
                key={i}
                className={`paging-number ${currentPage === i + 1 ? 'active' : ''}`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </span>
            ))}
          </span>
          <span className="paging-arrow" onClick={handleNext}>
            ➡️
          </span>
        </div>
      )}
    </div>
  );
}

export default App;
