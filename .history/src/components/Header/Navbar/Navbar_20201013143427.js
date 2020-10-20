import React from "react";
import { Switch, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navigation">
      <Link to="/">Home </Link>
      <Link to="/about">About Us </Link>
      <Link to="/shop">Shop Now </Link>
    </div>
  );
}

export default Navbar;
