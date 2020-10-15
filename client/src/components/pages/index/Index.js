import React from "react";

import './Index.css'

import Container from "react-bootstrap/Container";
import Carrousel from "./Carrousel";
import TrendCarrousel from "./TrendCarrousel";



export default () => {
  return (
    <Container>


      <Carrousel />

      <TrendCarrousel />
    </Container>
  );
};
