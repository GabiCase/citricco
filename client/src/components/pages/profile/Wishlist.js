import React, { Component } from "react";

import productService from "../../../service/products.service";
import { Container } from "react-bootstrap";
import FavCard from "./FavCard";

import "./Wishlist.css";

class Wishlist extends Component {
  constructor(props) {
    super();
    this.state = {
      favArray: [],
    };
    this.productService = new productService();
  }

  componentDidMount = () => this.getUserFav();

  getUserFav = () => {
    this.productService
      .getFavs(this.props.userId)
      .then((response) => this.setState({ favArray: response.data.fav }))
      .catch((err) => console.log("ERROR", err));
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="wrapper">
            <div className="tittle">
              <h3>My wishlist</h3>
            </div>

            <div className="grid gutterless">
              {this.state.favArray.map((elm) => (
                <FavCard
                  key={elm}
                  id={elm}
                  addToCart={this.props.addToCart}
                  userId={this.props.userId}
                  getUserFav={this.getUserFav}
                  fetchUser={this.props.fetchUser}
                />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Wishlist;
