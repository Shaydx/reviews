import React, { Component } from "react";

// Components
import Search from "../components/Search/Search";

class Home extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <main id="frontpage">
          <Search />
        </main>
      </div>
    );
  }
}

export default Home;
