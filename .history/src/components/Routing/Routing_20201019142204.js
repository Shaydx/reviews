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
      <Route exact path="/" render={(props) => <Home {...props}/> />
      <Route exact path="/login" render={(props) => <Login {...props}/> />
      <Route exact path="/virksomheder" render={(props) => <Virksomheder {...props}/> />
      <Route exact path="/r/:name" render={(props) => <Review {...props}/>} />
    </Switch>
  );
};

export default Routing;
