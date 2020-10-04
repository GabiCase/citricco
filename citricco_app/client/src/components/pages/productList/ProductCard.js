import React from "react";
import { Link } from "react-router-dom";

import { Card, Button, Col } from "react-bootstrap";

export default ({ _id, name, image, price }) => {
  return (
    <Col sm={12} md={4} lg={3}>
      <Card className="card">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title>{price}€</Card.Title>
          <Link to="/">
            <Button variant="sm">Add to cart</Button>
          </Link>
          <Link to={`/products/details/${_id}`}>
            <Button variant="sm">Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};
