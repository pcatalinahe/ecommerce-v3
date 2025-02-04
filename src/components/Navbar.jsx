// use state to toggle visibility of the hamburger menu
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

export const Navbar = () => {
  // state menuOpen initialized as false
  // function setMenuOpen toggles the state between true and false.
  const [menuOpen, setMenuOpen] = useState(false);

  // rendering
  return (
    <nav>
      <Link to="/" className="title">
        Home
      </Link>
      {/* hamburger menu event to toggle state */}
      <div className="menu" onClick={() => {
        setMenuOpen(!menuOpen);
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* hamburger menu for responsiveness, if menuOpen is false, no class is applied, otherwise true */}
      <ul className={menuOpen ? "open" : ""}>

        <li  onClick={() => setMenuOpen("")} >
          {/* prop "to" specifies what URL is linked */}
          <NavLink to="/products">Products</NavLink>
          
        </li>
        {/* event closes hamburger menu on user's click */}
        <li onClick={() => setMenuOpen("")}>
          <NavLink to="/about">About</NavLink>
        </li>
        <li onClick={() => setMenuOpen("")}>
        <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};
