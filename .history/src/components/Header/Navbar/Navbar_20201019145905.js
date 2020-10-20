import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navigation">
      <ul className="menu">
        <li className="menu-item">
          <NavLink exact to="/" activeClassName="current-menu-item">
            Home
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/login" activeClassName="current-menu-item">
            Login
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/Companies" activeClassName="current-menu-item">
            Companies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
