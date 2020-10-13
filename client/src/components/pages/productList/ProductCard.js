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

  toggleFav = () => {
    this.setState({ favImg: !this.state.favImg });
  };

  addToFav = () => {
    this.toggleFav();

    const productId = this.props._id;
    const userId = this.props.loggedInUser._id;

    this.productsService
      .fav(userId, { fav: productId })
      .then(() => this.props.refreshList())
      .catch((err) => console.log(err));
  };

  removeFromFav = () => {
    this.toggleFav();

    const productId = this.props._id;
    const userId = this.props.loggedInUser._id;

    this.productsService
      .unfav(userId, { fav: productId })
      .then(() => this.props.refreshList())
      .catch((err) => console.log(err));
  };

  render() {
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

              {this.props.loggedInUser ? (
                this.props.loggedInUser.fav.includes(this.props._id) ? (
                  <img onClick={this.removeFromFav} src={fav} alt={'fav'} />
                ) : (
                    <img onClick={this.addToFav} src={unfav} alt={'unfav'} />
                  )
              ) : null}


            </div>

            <Card.Title>{this.props.price}€</Card.Title>

            <Button onClick={this.props.addToCart} variant="sm">
              Add to cart
            </Button>

            <Link
              to={`/products/details/${this.props._id}`}
              increase={() => this.props.increase(this.props.product)}
              decrease={this.props.decrease}
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
