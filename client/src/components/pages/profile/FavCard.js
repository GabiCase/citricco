import React, { Component } from "react";

import productService from "../../../service/products.service";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import trash from "./basura.png";

class FavCard extends Component {
  constructor(props) {
    super();
    this.state = {
      product: "",
    };
    this.productService = new productService();
  }

  componentDidMount = () => this.loadProductById();

  loadProductById = () => {
    this.productService
      .getOneProduct(this.props.id)
      .then((response) => this.setState({ product: response.data }))
      .catch((err) => console.log("ERROR", err));
  };

  deleteFav = () => {
    console.log("usuario", this.props.userId);
    console.log("id en props", this.props.id);
    this.productService
      .unfav(this.props.userId, { fav: this.props.id })
      .then(() => this.props.getUserFav())
      .catch((err) => console.log("ERROR", err));
  };

  render() {
    console.log("props en favCard", this.props);
    return (
      <>
        {this.state.product && (
          <div className="brick">
            <img
              className="picture-fav"
              src={this.state.product.imageUrl[0]}
              alt={this.state.product.name}
              title=""
            />
            <Link onClick={() => this.deleteFav()} className="delete-content">
              <img className="appear-on-hover" src={trash} alt="trash" />
            </Link>

            <h4>{this.state.product.name}</h4>
            <div>{this.state.product.price}€</div>

            <Button onClick={() => this.props.addToCart(this.state.product)}>
              Add to cart
            </Button>
          </div>
        )}
      </>
    );
  }
}

export default FavCard;
