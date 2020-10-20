import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <img src="../../assets/img/logo.png" alt="Logo" />
      </Link>
    </div>
  );
}

export default Logo;
