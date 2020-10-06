import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import Navigation from "./layout/navbar/Navbar";
import Footer from "./layout/footer/Footer";

import Index from "./pages/index/Index";

import ProductsList from "./pages/productList/ProductList";
import ProductDetails from "./pages/productDetails/ProductDetails";
import NewProduct from "./pages/newProduct/NewProduct";
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import Profile from './pages/profile/Profile'

import authService from './../service/auth.service'

class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedInUser: undefined,
      cartProducts: []
    }
    this.authService = new authService()
  }

  cartChanged = (value) => {
    this.setState({ cartProducts: value })

  }
  setTheUser = user => this.setState({ loggedInUser: user }, () => console.log('El usuario es', this.state.loggedInUser))

  componentDidMount = () => {
    this.authService
      .loggedin()
      .then(res => this.setState({ loggedInUser: res.data }))
      .catch(err => this.setState({ loggedInUser: null }))
  }

  render() {
    return (
      <>
        <Navigation cartProducts={this.state.cartProducts} cartChanged={this.cartChanged} setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />
        <Switch>
          <Route path="/" exact render={() => <Index />} />
          <Route path="/products/all" render={() => <ProductsList setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />} />
          <Route
            path="/products/details/:product_id"
            render={(props) => <ProductDetails setTheUser={this.setTheUser} {...props} />}
          />
          <Route
            path="/products/newProduct"
            render={(props) => <NewProduct {...props} />}
          />
          <Route path="/account/signup" render={props => <Signup setTheUser={this.setTheUser} {...props} />} />
          <Route path="/account/login" render={props => <Login setTheUser={this.setTheUser} {...props} />} />
          <Route path="/account/profile" render={props =>
            this.state.loggedInUser ? <Profile loggedInUser={this.state.loggedInUser} {...props} />
              : <Redirect to="/account/login" />
          } />


        </Switch>

        <Footer />
      </>
    );
  }
}

export default App;
