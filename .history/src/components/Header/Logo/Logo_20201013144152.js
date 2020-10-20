import React from "react";
import { Link, Route } from "react-router-dom";

function Logo() {
  return (
    <div className="logo">
      <Link to="/">NPS.Today</Link>
    </div>
  );
}

export default Logo;
