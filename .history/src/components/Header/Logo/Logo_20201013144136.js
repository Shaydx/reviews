import React from "react";
import { Link, Route } from "react-router-dom";

// Pages
import Home from "../../../pages/Home";

function Logo() {
  return (
    <div className="logo">
      <Link to="/">Home</Link>

      <Route exact path={["/", "/home"]} component={Home} />
    </div>
  );
}

export default Logo;
