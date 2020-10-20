import React from "react";
import { Switch, Route } from "react-router-dom";

// Pages
import Home from "../../pages/Home";
import Audika from "../../pages/Review";
import Login from "../../pages/Login";
import Virksomheder from "../../pages/Virksomheder";
import Search from "../../components/Search/Search";

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/audikaDK" component={Audika} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/virksomheder" component={Virksomheder} />
      <Route exact path="/r/:name" component={Review} />
    </Switch>
  );
};

export default Routing;
