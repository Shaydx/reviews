import React from "react";
import { Link, Route } from "react-router-dom";

function Navbar() {
  return (
    <div className="navigation">
      <Link to="/">Home</Link>
      <Link to="/about">About Us </Link>
      <Link to="/shop">Shop Now </Link>
    </div>

<Route exact path={["/", "/home"]} component={Home} />
  );
}

export default Navbar;
