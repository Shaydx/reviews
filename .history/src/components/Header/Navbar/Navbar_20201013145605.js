import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navigation">
      <NavLink to="/" activeClassName="current-menu-item">
        Home
      </NavLink>
      <NavLink to="/about" activeClassName="current-menu-item">
        About Us
      </NavLink>
      <NavLink to="/shop" activeClassName="current-menu-item">
        Shop Now
      </NavLink>
    </nav>
  );
}

export default Navbar;
