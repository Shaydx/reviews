import React from "react";

// Styling
import "./Header.scss";

// Components
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import NavBar from "./Navbar/Navbar";

const Header = () => {
  return (
    <div className="header-container">
      <Logo />
      <div className="search">
        <Search />
      </div>
      <div className="navigation">
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
