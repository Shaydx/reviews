import React from "react";
import { Switch, Route } from "react-router-dom";

// Styling
import "./App.css";

// Components
import Header from "./components/Header/Header";

// Pages
import Home from "../../../pages/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Header />

        <Route exact path={["/", "/home"]} component={Home} />
      </Switch>
    </div>
  );
}

export default App;
