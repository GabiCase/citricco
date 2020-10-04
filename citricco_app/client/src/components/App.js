import React from "react";
import { Switch, Route } from 'react-router-dom'
import "./App.css";


import Navigation from './layout/navbar/Navbar'
import Footer from './layout/footer/Footer'
import ProductsList from './pages/productList/ProductList'
import Index from './pages/index/Index'


function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact render={() => <Index />} />
        <Route path="/products/all" render={() => <ProductsList />} />
      </Switch>


      <Footer />
    </>
  );
}

export default App;
