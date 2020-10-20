import React, { Component } from "react";

// Components
import Logo from "./Logo/Logo";
import Search from "../Search/Search";
import NavBar from "./Navbar/Navbar";

class Header extends Component {
  render() {
    this.props.fetchFrontPage();
    return (
      <div className="header-container">
        <Logo />
        <Search />
        <NavBar />
      </div>
    );
  }
}

export default Header;
