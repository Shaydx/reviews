import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Styling
import "./assets/scss/app.scss";

// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Routing
import Content from "./components/Routing/Routing";

function App(props) {
  return (
    <Router>
      <Header {...props}  />
      <Content />
      <Footer />
    </Router>
  );
}

export default App;
