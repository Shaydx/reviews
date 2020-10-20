import React, { Component } from "react";

// Components
import Logo from "./Logo/Logo";
import Search from "../Search/Search";
import NavBar from "./Navbar/Navbar";

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <Logo />
        {this.state.receivedProps == true ? null : <Search fetchReviewName={this.props.fetchReviewName} />}
        <NavBar fetchReviewName={this.props.fetchReviewName} />
      </div>
    );
  }
}

export default Header;
