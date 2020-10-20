import React, { Component } from "react";

// Components
import Logo from "./Logo/Logo";
import Search from "../Search/Search";
import NavBar from "./Navbar/Navbar";

class Header extends Component {
  state = {
    frontpage: false,
  }

  render() {
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

const [frontpage, setFrontPage] = useState(false);