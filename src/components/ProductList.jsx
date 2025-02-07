import React, { useEffect, useState, useRef } from "react";
import "../styles/Products.css";
// import "../Styles.css"

export const ProductList = () => {
  const [products, setProducts] = useState([]); //state to store the products
  const [filteredProducts, setFilteredProducts] = useState([]); //state to store the filtered products
  const selectRef = useRef(null);

  
  useEffect(() => { //send a fetch request to the server to get the products
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        console.log(data);
      });
  }, []);

  function handleFilter(e) { //handlefilter function filters the products based on the price range selected
    const value = e.target.value; //get the value of the selected option
    console.log("it changed, ", value);
    if (value === "all") { //if the user selects all, show all products
      setFilteredProducts(products);
    }
    if (value === "low") { //if the user selects low, show products with price less than 400
      const lowPrice = products.filter((product) => product.price < 400);
      setFilteredProducts(lowPrice);
    } else if (value === "high") {
      const highPrice = products.filter((product) => product.price > 400);
      setFilteredProducts(highPrice); 
    }
  }

  return (
    <div className="products-container">
      {/* <div id="hero">
        <video autoPlay muted loop>
          <source src="src/assets/hero.mp4" type="video/mp4" />
        </video>
      </div> */}
      <h1 className="products-title">Services</h1>

      <select
        className="price-filter"
        onChange={handleFilter}  //call the handleFilter function when the user selects an option
        ref={selectRef} //reference to the select element
        name=""
        id="price-filter" 
      >
        <option value="all">Select your price range</option>
        <option value="low">$110-$400</option>
        <option value="high">Over $400</option>
      </select>
      {/* map through the filtered products and display them */}
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              className="product-image"
              src={product.image}
              alt={product.description}
            />
            <div className="product-details">
              <h2 className="product-title">{product.title}</h2>
              <p className="product-description">{product.description}</p>
              <p className="product-price">$ {product.price}</p>
              <button className="product-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};