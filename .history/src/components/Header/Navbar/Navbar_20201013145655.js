import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navigation">
      <ul className="menu">
        <li className="menu-item">
          {" "}
          <NavLink to="/" activeClassName="current-menu-item">
            Home
          </NavLink>
        </li>

        <NavLink to="/about" activeClassName="current-menu-item">
          About Us
        </NavLink>
        <NavLink to="/shop" activeClassName="current-menu-item">
          Shop Now
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
