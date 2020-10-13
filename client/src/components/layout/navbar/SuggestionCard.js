import React from "react";

import { Col } from "react-bootstrap";

import { Link } from "react-router-dom";

const SuggestionCard = ({ name, imageUrl, price, _id, hiddeSuggestion }) => {
  return (
    <>
      <Col sm={12} md={4} lg={2} className="col-suggestion">
        <Link onClick={() => hiddeSuggestion()} to={`/products/details/${_id}`}>
          <div className="card-suggestion">
            <img variant="top" src={imageUrl[0]} alt={name} />
            <p className="name">{name} </p>
            <p className="price">{price}€</p>
          </div>
        </Link>
      </Col>
    </>
  );
};

export default SuggestionCard;
