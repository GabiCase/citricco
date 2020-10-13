import React, { Component } from "react";
import { Link } from "react-router-dom";

import productsService from "../../../service/products.service";

import fav from "./images/heart-pressed.png";
import unfav from "./images/heart-empty.png";

import { Card, Button, Col } from "react-bootstrap";
class ProductCard extends Component {
  constructor(props) {
    super();
    this.state = {
      favImg: false,
    };

    this.productsService = new productsService();
  }

  componentDidMount = () => this.setState({ favImg: this.props.isFav });

  toggleFav = () => {
    this.setState({ favImg: !this.state.favImg }, () => this.saveChanges());
  };

  saveChanges = () => {
    const productId = this.props._id;
    const userId = this.props.loggedInUser._id;

    if (this.state.favImg) {
      this.productsService
        .fav(userId, { fav: productId })
        .then(() => this.props.refreshList())
        .catch((err) => console.log(err));
    } else {
      this.productsService
        .unfav(userId, { fav: productId })
        .then(() => this.props.refreshList())
        .catch((err) => console.log(err));
    }
  };

  render() {
    console.log("PROPS DE LOGEDIN USER FAV", this.props.loggedInUser);
    return (
      <Col sm={12} md={4} lg={3}>
        <Card className="card-list">
          <Card.Img
            className="300product"
            variant="top"
            src={this.props.imageUrl[0]}
          />
          <Card.Body>
            <div className="card-component">
              <Card.Title>{this.props.name}</Card.Title>

              {this.props.loggedInUser && (
                <img
                  onClick={() => this.toggleFav()}
                  src={this.state.favImg ? fav : unfav}
                  alt={"white heart"}
                />
              )}
            </div>

            <Card.Title>{this.props.price}€</Card.Title>

            <Button onClick={this.props.addToCart} variant="sm">
              Add to cart
            </Button>

            <Link
              to={`/products/details/${this.props._id}`}
              increase={() => this.props.increase(this.props.product)}
              decrease={() => this.props.decrease(this.props.product)}
            >
              <Button variant="sm">Details</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default ProductCard;
