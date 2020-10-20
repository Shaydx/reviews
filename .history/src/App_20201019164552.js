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

  fetchReviewName(reviewName) {
    alert("hello");
    this.setState({
      reviewName: reviewName,
    });
  }

  render() {
    return (
      <Router>
        <Header fetchReviewName={this.fetchReviewName} />
        <Routing fetchReviewName={this.fetchReviewName} />
        <Footer />
      </Router>
    );
  }
}

export default App;
