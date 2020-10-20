import React from "react";

// Components
import Logo from "./Logo/Logo";
import Search from '../Search/Search';
import NavBar from "./Navbar/Navbar";

// Pages

const Header = (props) => {
  console.log(props.path)
  return (
    <div className="header-container">
      <Logo />
      {<Search />}
      <NavBar />
    </div>
  );
};

export default Header;