import React, { Component } from "react";

// Styling
import "./App.css";

// Components

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
