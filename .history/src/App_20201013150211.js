import React from "react";

// Styling
import "./App.css";

// Components
import Header from "./components/Header/Header";

// Pages
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />

      <Route exact path={["/", "/home"]} component={Home} />
    </div>
  );
}

export default App;
