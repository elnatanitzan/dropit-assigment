import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

import pathsApp from "./pathsApp";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path={pathsApp.home}>
        <HomePage />
      </Route>

      <Route exact path={pathsApp.catalog}>
        <CatalogPage />
      </Route>

      <Route path={pathsApp.product}>
        <ProductPage />
      </Route>

      <Route path={pathsApp.cart}>
        <CartPage />
      </Route>
    </Switch> 
  </Router>
);

export default AppRouter;
