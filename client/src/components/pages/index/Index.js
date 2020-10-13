import React from "react";

import Container from "react-bootstrap/Container";
import Carrousel from './Carrousel'
import TrendCarrousel from "./TrendCarrousel";

export default () => {
  return (
    <Container>
      <h1>Citricco Store</h1>
      <Carrousel />

      <TrendCarrousel />
    </Container>
  );
};
