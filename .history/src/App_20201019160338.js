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
    orgName: null,
  };

  fetchFrontPage() {
    let reviewName = this.props.match.params.name;
    this.setState({
      reviewName: reviewName,
    });
  }

  render() {
    return (
      <Router>
        <Header />
        <Content />
        <Footer />
      </Router>
    );
  }
}

export default App;
