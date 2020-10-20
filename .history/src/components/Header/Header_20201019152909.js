import React, { useState } from "react";

// Components
import Logo from "./Logo/Logo";
import Search from "../Search/Search";
import NavBar from "./Navbar/Navbar";

const Header = () => {
  const [frontPage, setFrontPage] = useState(false);

  return (
    <div className="header-container">
      <Logo />
      <Search onLoad={} />
      <NavBar />
    </div>
  );
};

export default Header;
