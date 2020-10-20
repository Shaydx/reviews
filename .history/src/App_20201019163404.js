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

  fetchReviewName(reviewName) {
    this.setState({
      reviewName: reviewName,
    });
  }

  render(props) {
    return (
      <Router>
        <Header fetchReviewName={fetchReviewName} />
        <Content {...props} />
        <Footer {...props} />
      </Router>
    );
  }
}

export default App;
