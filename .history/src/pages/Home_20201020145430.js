import React, { Component } from "react";

// Components
import Search from "../components/Search/Search";

class Home extends Component {
  render(props) {
    return (
      <div className="content-wrapper-frontpage">
        <main>
          <Search {...props} />
        </main>
      </div>
    );
  }
}

export default Home;
