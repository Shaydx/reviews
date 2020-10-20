import React from "react";
import { Switch, Route } from "react-router-dom";

// Pages
import Home from "../../pages/Home";
import Review from "../../pages/Review";
import Login from "../../pages/Login";
import Virksomheder from "../../pages/Virksomheder";

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/virksomheder" component={Virksomheder} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default Routing;
