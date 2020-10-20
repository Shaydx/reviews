import React from "react";

// Components
import Search from "../components/Search/Search";

const Home = () => {
  return (
    <div className="content-wrapper">
      <main id="frontpage">
        <Search />
      </main>
    </div>
  );
};

export default Home;

import React, { Component } from "react";

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
