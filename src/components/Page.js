import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import ProductListPage from "./ProductListPage";
import ContactPage from "./ContactPage";
import AdminPage from "./AdminPage";
import LoginPage from "./LoginPage";
import ErrorPage from "./ErrorPage";
import ProductsPage from "./ProductsPage";

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/products" component={ProductListPage} />
        <Route path="/product/:id" component={ProductsPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/login" component={LoginPage} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
};

export default Page;
