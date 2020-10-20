import React from "react";
import { Switch, Route } from "react-router-dom";

// Pages
import Home from "../../pages/Home";
import Audika from "../../pages/Review";
import Login from "../../pages/Login";
import Virksomheder from "../../pages/Virksomheder";
import Review from "../../pages/Review";

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/audikaDK" component={Audika} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/virksomheder" component={Virksomheder} />
      <Route exact path="/r/:name" render={(props) => {Review}} />
    </Switch>
  );
};

export default Routing;
