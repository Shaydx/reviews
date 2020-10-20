import React from "react";
import { Switch, Route } from "react-router-dom";

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
      <Search />
      <NavBar />
    </div>
  );
};

export default Header;
