import React from "react";
import { Switch, Route } from "react-router-dom";

// Pages
import Home from "../../pages/Home";

const Routing = () => {
  return (
    <Switch>
      <Route exact path={["/", "/home"]} component={Home} />
    </Switch>
  );
};

export default Routing;
