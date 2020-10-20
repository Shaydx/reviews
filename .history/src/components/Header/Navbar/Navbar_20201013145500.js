import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navigation">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About Us </NavLink>
      <NavLink to="/shop">Shop Now </NavLink>
    </div>
  );
}

export default Navbar;
