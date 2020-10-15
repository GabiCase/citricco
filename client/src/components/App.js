import React, { Component } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import "./App.css";

import Navigation from "./layout/navbar/Navbar";

import Index from "./pages/index/Index";

import ProductsList from "./pages/productList/ProductList";
import ProductDetails from "./pages/productDetails/ProductDetails";
import NewProduct from "./pages/newProduct/NewProduct";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Cart from "./layout/navbar/Cart";

import Footer from "./layout/footer/Footer";


import Payment from "./pages/payment/Payment";

import Logo from "./Logo";

import authService from "./../service/auth.service";
import productsService from "./../service/products.service";

import Category from "./pages/productList/Category";
import Wishlist from "./pages/profile/Wishlist";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInUser: null,
      cart: [],
      total: 0,
      quantity: 0,
      quantityDetails: 0,
      products: undefined,
      alert: false,
      key: "",
    };
    this.authService = new authService();
    this.productsService = new productsService();
  }

  setTheUser = (user) =>
    this.setState({ loggedInUser: user }, () =>
      console.log("El usuario es", this.state.loggedInUser)
    );


  fetchUser = () => {
    this.authService
      .loggedin()
      .then((res) => this.setState({ loggedInUser: res.data }))
      .catch((err) => this.setState({ loggedInUser: null }));
  };

  componentDidMount = () => !this.state.loggedInUser & this.fetchUser()

  addToCart = (product) => {
    const cartCopy = [...this.state.cart];
    let itemInCart = cartCopy.find((elm) => elm.name === product.name);

    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      cartCopy.push(itemInCart);
    }
    this.setState({ cart: cartCopy });
  };

  addToCartDet = (product) => {
    const cartCopy = [...this.state.cart];
    let itemInCart = cartCopy.find((elm) => elm.name === product.name);

    if (itemInCart) {
      itemInCart.quantity = itemInCart.quantity + this.state.quantity;
    } else {
      itemInCart = {
        ...product,
        quantity: this.state.quantity,
      }

      cartCopy.push(itemInCart);
    }
    this.setState({ cart: cartCopy, quantity: 0 });
    this.showAlert()
  };

  showAlert = () => {
    console.log(this.state.quantity)
    if (this.state.quantity <= 0) {
      this.setState({ alert: false })
    } else {
      this.setState({ alert: true })
    }
  }


  removeFromCart = (productToRemove) => {
    const removeCopy = [...this.state.cart];
    const cartUpdated = removeCopy.filter(
      (product) => product !== productToRemove
    );
    this.setState({ cart: cartUpdated });
    this.calculateTotal(cartUpdated);
  };

  decrease = (product) => {
    const decreaseCart = [...this.state.cart];
    let itemDecrease = decreaseCart.find((elm) => elm._id === product._id);

    if (itemDecrease.quantity > 0) {
      itemDecrease.quantity--;
    } else {
      itemDecrease.quantity = 0;
    }
    this.setState({ cart: decreaseCart });
    this.calculateTotal(decreaseCart);
  };

  increase = (product) => {
    const increaseCart = [...this.state.cart];
    let itemIncrease = increaseCart.find((elm) => elm._id === product._id);
    if (itemIncrease.quantity >= 0) {
      itemIncrease.quantity++;
    } else {
      itemIncrease.quantity = 0;
    }
    this.setState({ cart: increaseCart });
    this.calculateTotal(increaseCart);
  };

  calculateTotal = (cart) => {
    let totalSum = 0;
    cart.map((elm) => (totalSum += elm.price * elm.quantity));
    const roundTot = totalSum.toFixed(2);
    this.setState({ total: roundTot });
  };

  counterIncrement = () => {
    this.setState({ quantity: this.state.quantity + 1 });
    this.showAlert()
  };

  counterDecrement = () => {
    console.log(this.state.quantity)
    this.state.quantity > 0
      ? this.setState({ quantity: this.state.quantity - 1 })
      : (this.state.quantity = 0);
    this.showAlert()
  };

  componentDidMount = () => {
    this.loadProducts();
  };

  loadProducts = () => {
    this.productsService
      .getAllProducts()
      .then((response) => this.setState({ products: response.data }))
      .catch((err) => console.log("ERROR", err));
  };

  render() {
    return (
      <>
        <Navigation
          {...this.props}
          cart={this.state.cart}
          cartChanged={this.cartChanged}
          loggedInUser={this.state.loggedInUser}
        />
        <div className="title-box">
          <Logo />
          <Link className="text-dec-none">
            <h1>Citricco</h1>
          </Link>
        </div>
        <Switch>
          <Route path="/" exact render={() => <Index />} />
          <Route
            path="/products/all"
            render={() => (
              <ProductsList
                addToCart={this.addToCart}
                loggedInUser={this.state.loggedInUser}
                fetchUser={this.fetchUser}
              />
            )}
          />

          <Route
            path="/products/category/:category"
            render={(props) => (
              <Category {...props} addToCart={this.addToCart} />
            )}
          />

          <Route
            path="/products/details/:product_id"
            render={(props) => (
              <ProductDetails
                {...props}
                loggedInUser={this.state.loggedInUser}
                quantity={this.state.quantity}
                addToCartDet={this.addToCartDet}
                counterIncrement={this.counterIncrement}
                counterDecrement={this.counterDecrement}
                alert={this.state.alert}
              />
            )}
          />
          <Route
            path="/products/newProduct"
            render={(props) => <NewProduct {...props} />}
          />
          <Route
            path="/account/signup"
            render={(props) => (
              <Signup setTheUser={this.setTheUser} {...props} />
            )}
          />
          <Route
            path="/account/login"
            render={(props) => (
              <Login setTheUser={this.setTheUser} {...props} />
            )}
          />
          <Route
            path="/account/profile"
            render={(props) =>
              this.state.loggedInUser ? (
                <Profile
                  loggedInUser={this.state.loggedInUser}
                  setTheUser={this.setTheUser}
                  {...props}
                />
              ) : (
                  <Redirect to="/" />
                )
            }
          />
          <Route
            path="/wishlist"
            render={() =>
              this.state.loggedInUser ? (
                <Wishlist
                  userId={this.state.loggedInUser._id}
                  addToCart={this.addToCart}
                  refresh={this.loadProducts}
                  fetchUser={this.fetchUser}
                />
              ) : (
                  <Redirect to="/" />
                )
            }
          />

          <Route
            path="/cart"
            render={() => (
              <Cart
                cart={this.state.cart}
                total={this.state.total}
                addToCart={this.addToCart}
                removeFromCart={this.removeFromCart}
                calculateTotal={this.calculateTotal}
                decrease={this.decrease}
                increase={this.increase}
                loggedInUser={this.state.loggedInUser}
              />
            )}
          />

          <Route path="/payment" render={() => <Payment />} />
        </Switch>

        <Footer />


      </>
    );
  }
}

export default App;
