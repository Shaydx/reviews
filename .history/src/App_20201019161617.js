import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Styling
import "./assets/scss/app.scss";

// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Routing
import Routing from "./components/Routing/Routing";

class App extends Component {
  state = {
    reviewName: null,
  };

  fetchFrontPage(reviewName) {
    // this.setState({
    //   reviewName: reviewName,
    // });
    alert('it works!');
  }

  render() {
    return (
      <Router>
        <Header fetchFrontPage={this.fetchFrontPage} />
        <Routing fetchFrontPage={this.fetchFrontPage} />
        <Footer />
      </Router>
    );
  }
}

export default App;
