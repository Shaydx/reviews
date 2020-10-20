import React from "react";

// Styling
import "./Header.scss";

// Components
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import NavBar from "./Navbar/Navbar";

// Pages

const Header = () => {
  return (
    <div className="header-container">
      <Logo />
      <Search />
      <NavBar />
    </div>
  );
};

export default Header;
