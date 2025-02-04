import { useState } from "react";
import "./styles/App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer"; 
import { Route, Routes } from "react-router-dom";
import { Home, About, Contact, Products } from "./pages"; 


function App() {
  return (
      <div className="App">
        {/* Placed outside <Routes> so it is rendered on all pages */}
        <Navbar />
        {/* The <Routes> component ensures only one route is rendered at a time. */}
        <Routes>
          {/* <Route> component maps a specific URL path to a React component */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;


