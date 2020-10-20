import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";

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
            Login
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/virksomheder" activeClassName="current-menu-item">
            Virksomheder
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
