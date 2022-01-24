import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";

import pathsApp from "./pathsApp";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path={pathsApp.home}>
        <HomePage />
      </Route>

      <Route path={pathsApp.catalog}>
        <CatalogPage />
      </Route>
    </Switch>
  </Router>
);

export default AppRouter;
