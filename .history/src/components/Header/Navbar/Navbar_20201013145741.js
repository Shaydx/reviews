import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navigation">
      <ul className="menu">
        <li className="menu-item">
          <NavLink to="/" activeClassName="current-menu-item">
            Home
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/login" activeClassName="current-menu-item">
            About Us
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/virksomheder" activeClassName="current-menu-item">
            Shop Now
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
