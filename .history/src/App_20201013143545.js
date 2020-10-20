import React from "react";
import { Switch } from "react-router-dom";

// Styling
import "./App.css";

// Components
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Switch>
        <Header />
      </Switch>
    </div>
  );
}

export default App;
