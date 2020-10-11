import React from 'react'

import { Col } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const SuggestionCard = ({ name, image, price, _id, hiddeSuggestion }) => {

    return (
        <>

            <Col sm={12} md={4} lg={2} className="col-suggestion">
                <Link onClick={() => hiddeSuggestion()} to={`/products/details/${_id}`}>
                    <div className="card-suggestion">
                        <img variant="top" src={image[0]} alt={name} />
                        <p>{name} </p>
                        <p>{price}€</p>
                    </div>
                </Link>

            </Col>

        </>

    )
}

export default SuggestionCard