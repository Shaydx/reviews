import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <img src="C:\Users\MishariAdelToama\Desktop\reviews\src\assets\img\logo.png" alt="Logo" />
      </Link>
    </div>
  );
}

export default Logo;
