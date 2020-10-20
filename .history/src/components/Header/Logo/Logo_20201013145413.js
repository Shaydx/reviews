import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <h1>NPS.Today</h1>
      </Link>
    </div>
  );
}

export default Logo;
