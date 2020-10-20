import React from "react";

// Styling
import "./Header.scss";

// Components
import NavBar from "./Navbar/Navbar";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">logo</div>
      <div className="search">Search</div>
      <div className="navigation">
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
