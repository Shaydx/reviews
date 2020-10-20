import React from "react";
import { Switch, Route } from "react-router-dom";

// Pages
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Virksomheder from "../../pages/Home";

const Routing = () => {
  return (
    <Switch>
      <Route exact path={["/", "/home"]} component={Home} />
      <Route exact path={["/login"]} component={Login} />
      <Route exact path={["/virksomheder"]} component={Virksomheder} />
    </Switch>
  );
};

export default Routing;
