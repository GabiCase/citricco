import React from "react";

import Container from "react-bootstrap/Container";
import Carrousel from "./Carrousel";
import TrendCarrousel from "./TrendCarrousel";

export default () => {
  return (
    <Container>
      <Carrousel />

      <TrendCarrousel />
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
      <div className="footer">

      </div>
 
    </Container>
  );
};
