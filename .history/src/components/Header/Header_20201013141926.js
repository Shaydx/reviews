import React from "react";

// Styling

// Components
import NavBar from "./Navbar";

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
