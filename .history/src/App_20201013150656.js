import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Styling
import "./App.css";

// Components
import Header from "./components/Header/Header";

// Routing
import Content from "./components/Routing/Routing";

function App() {
  return (
    <Router>
      <Navigation
        loginHandler={this.loginHandler}
        userLoggedIn={this.state.userLoggedIn}
        setLogOut={() => this.setState({ userLoggedIn: false })}
      />
      <Content loginHandler={this.loginHandler} />
      {this.state.userLoggedIn ? "Yes" : "No"}
      <Footer />
    </Router>
  );
}

export default App;
