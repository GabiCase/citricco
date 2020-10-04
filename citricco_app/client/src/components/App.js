import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Navigation from "./layout/navbar/Navbar";
import Footer from "./layout/footer/Footer";

import Index from "./pages/index/Index";

import ProductsList from "./pages/productList/ProductList";
import ProductDetails from "./pages/productDetails/ProductDetails";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact render={() => <Index />} />
        <Route path="/products/all" render={() => <ProductsList />} />
        <Route
          path="/products/details/:product_id"
          render={(props) => <ProductDetails {...props} />}
        />
        <Route
          path="/products/newProduct"
          render={(props) => <NewProduct {...props} />}
        />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
