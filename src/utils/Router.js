import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Main from "../views/Main";

// Setting up the router
const Router = (props) => (
  // Setting up spa hash routing
  <HashRouter>
    {/* Switch is used to make sure the routes are switched when the path changes on the react app */}
    <Switch>
      {/* The exact page we want to open when the route hits the application */}
      <Route exact path="/" component={Main} />
      <Route exact path="/home" component={Main} />
    </Switch>
  </HashRouter>
);

export default Router;
