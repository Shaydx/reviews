import React from "react";
import { Route } from "react-router-dom";

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
      <Route>
        <NavBar />
      </Route>
    </div>
  );
};

export default Header;
