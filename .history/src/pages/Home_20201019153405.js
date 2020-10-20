import React, { Component } from "react";

// Components
import Search from "../components/Search/Search";

class Home extends Component {
  render(props) {
    console.log(this.props);
    return (
      <div className="content-wrapper">
        <main id="frontpage">
          <Search {...props} />
        </main>
      </div>
    );
  }
}

export default Home;
