import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Styling
import "./assets/scss/app.scss";

// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Routing
import Content from "./components/Routing/Routing";

function App() {
  return (
    <Router>
      <Header />
      <Content />
      <Footer />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/login" render={(props) => <Login {...props} />} />
        <Route
          exact
          path="/companies"
          render={(props) => <Companies {...props} />}
        />
        <Route
          exact
          path="/r/:name"
          render={(props) => <Review {...props} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
