import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Styling
import "./assets/scss/app.scss";

// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Routing
import Content from "./components/Routing/Routing";

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
        <Content fetchFrontPage={this.fetchFrontPage} />
        <Footer />
      </Router>
    );
  }
}

export default App;
