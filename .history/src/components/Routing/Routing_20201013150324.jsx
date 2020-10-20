import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// Pages
import Home from "../../pages/Home";
import Virksomheder from "../../pages/Virksomheder";
import Login from "../../pages/Login";

const Routing = () => {
  return (
    <Switch>
      <Route
        path="/login"
        render={(props) => (
          <Login {...props} loginHandler={this.props.loginHandler} />
        )}
      />
      <Route path="/virksomheder" component={Virksomheder} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default Routing;
