import React, { useState } from "react";

// Components
import Logo from "./Logo/Logo";
import Search from "../Search/Search";
import NavBar from "./Navbar/Navbar";

const Header = () => {
  const [frontPage, setFrontPage] = useState(false);

  setFrontPage = () => {
    setFrontPage = true;
  }

  return (
    <div className="header-container">
      <Logo />
      <Search />
      <NavBar />
    </div>
  );
};

export default Header;
