import React from "react";

import './Index.css'

import { Container, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'
import Carrousel from "./Carrousel";
import TrendCarrousel from "./TrendCarrousel";

export default () => {
  return (
    <Container>

      <Carrousel />

      <div className="intro">
        <h4>About us</h4>
        <p>
          We are María and Marta Casero, sisters and happy owners of Citricco.
          <br />
          We love creative processes and enjoy every part in the making of our
          earrings. From designing the shapes, experimenting with new ideas you
          don't always end up seeing... to choosing the colors and textures of
          the materials. <br />
          Hope you enjoy the results as much as we enjoy the making.<br></br> ♡ ♡ Un beso!
        </p>
      </div>

      <div style={{ width: '100 %' }}>
        <Button className="start"><Link to="/products/all">Start shopping!</Link></Button>
      </div>

      <TrendCarrousel />

    </Container>
  );
};
