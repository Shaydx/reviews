import React from "react";

// Components
import Logo from "./Logo/Logo";
import Search from '../../components/';
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
