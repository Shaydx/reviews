import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Styling
import "./assets/app.scss";

// Components
import Header from "./components/Header/Header";

// Routing
import Content from "./components/Routing/Routing";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Content />
      </main>
    </Router>
  );
}

export default App;
