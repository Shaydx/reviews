import React from "react";
import { Switch, Route } from "react-router-dom";

// Pages
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Companies from "../../pages/Companies";
import Review from "../../pages/Review";

const Routing = (props) => {
  props.fetchFrontPage();
  return (
    <Switch>
      <Route exact path="/" render={(props) => <Home {...props}/>} />
      <Route exact path="/login" render={(props) => <Login {...props}/>} />
      <Route exact path="/companies" render={(props) => <Companies {...props}/>} />
      <Route exact path="/r/:name" render={(props) => <Review {...props}/>} />
    </Switch>
  );
};

export default Routing;
