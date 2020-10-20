import React, { Component } from "react";

// Styling
import "./App.css";

// Components

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </div>
  );
}

export default App;
