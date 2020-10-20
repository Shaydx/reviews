import React from "react";
import { Link, Route } from "react-router-dom";

// Pages
import Home from "../../../pages/Home";

function Navbar() {
  return (
    <div className="navigation">
      <Link to="/">Home</Link>
      <Link to="/about">About Us </Link>
      <Link to="/shop">Shop Now </Link>

      <Route exact path={["/", "/home"]} component={Home} />
    </div>
  );
}

export default Navbar;
