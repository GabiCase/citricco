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
    }

    this.productsService = new productsService();
  }

  toggleFav = () => {
    this.setState({ favImg: !this.state.favImg }, () => this.showChanges());
  };

  showChanges = () => {
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

  // activateFav = () => {
  //   console.log('estoy en activateFav, mi estado es', this.state.favImg)
  //   this.setState({ favImg: true }, () => this.addToFav());
  //   console.log('estoy en activate fav mi estado ha cambiado a', this.state.favImg)
  // };

  // deactivateFav = () => {
  //   console.log('estoy en deactivateFAv, mi estado es', this.state.favImg)
  //   this.setState({ favImg: false }, () => this.removeFromFav());
  //   console.log('estoy en deactivate fav mi estado ha cambiado a', this.state.favImg)
  // };

  // addToFav = () => {
  //   console.log('he entrado en addToFav y el estado de la imagen es', this.state.favImg)
  //   console.log('array de addfavs antes del servicio (PROPS)', this.props.loggedInUser.fav)
  //   const productId = this.props._id;
  //   const userId = this.props.loggedInUser._id;

  //   this.productsService
  //     .fav(userId, { fav: productId })
  //     .then((response) => this.props.refreshList())
  //     .catch((err) => console.log(err));
  //   console.log('array de addfavs después del servicio (PROPS)', this.props.loggedInUser.fav)
  // };

  // removeFromFav = () => {

  //   console.log('he entrado a remove y el estado de la imagen es', this.state.favImg)
  //   console.log('array de remove favs antes del servicio (PROPS)', this.props.loggedInUser.fav)
  //   const productId = this.props._id;
  //   const userId = this.props.loggedInUser._id;

  //   this.productsService
  //     .unfav(userId, { fav: productId })
  //     .then(() => this.props.refreshList())
  //     .catch((err) => console.log(err));
  //   console.log('array de removefavs después del servicio (PROPS)', this.props.loggedInUser.fav)

  // };

  render() {
    console.log('PROPS DE LOGEDIN USER FAV', this.props.loggedInUser)
    return (
      <Col sm={12} md={4} lg={3}>
        <Card className="card-list">
          <Card.Img
            className="300product"
            variant="top"
            src={this.props.imageUrl[0]} />
          <Card.Body>
            <div className="card-component">
              <Card.Title>{this.props.name}</Card.Title>

              {this.props.loggedInUser ? (
                this.props.loggedInUser.fav.includes(this.props._id) | !this.state.favImg ? (
                  <img onClick={this.toggleFav} src={fav} alt={'black heart'} />
                ) : (
                    <img onClick={this.toggleFav} src={unfav} alt={'white heart'} />
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
