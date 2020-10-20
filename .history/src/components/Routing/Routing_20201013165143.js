import React from "react";
import { Switch, Route } from "react-router-dom";

// Pages
import Home from "../../pages/Home";
import Login from "../../pages/Home";
import Virksomheder from "../../pages/Home";

const Routing = () => {
  return (
    <Switch>
      <Route exact path={["/", "/home"]} component={Home} />
      <Route exact path={["/login"]} component={Login} />
      <Route exact path={["/virksomheder"]} component={Home} />
    </Switch>
  );
};

export default Routing;
