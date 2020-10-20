import React from "react";
import { Switch, Route } from "react-router-dom";

// Styling
import "./App.css";

// Components
import Header from "./components/Header/Header";

// Routing
import Content from "./components/Routing/Routing";

function App() {
  return (
    <div className="App">
      <Switch>
        <Header />
        <Content />
      </Switch>
    </div>
  );
}

export default App;
