import React from "react";
import "./Footer.css";
import {Link} from "react-router-dom";

import instagram from "./instagram.png";
import email from "./email.png";

import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export default () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow className="justify-content-space-between">
          <MDBCol md="6" className="list-unstyled">
            <img src={email} alt="email" />

            <p>store.citricco@gmail.com </p>
          </MDBCol>
          <MDBCol md="6" className="list-unstyled">
            <Link href="https://www.instagram.com/citricco.store/?hl=es">
              <img src={instagram} alt="instagram" />
            </Link>
            <p>citricco.store</p>
          </MDBCol>
          <MDBContainer fluid>
            <MDBCol className="footer-copyright text-center py-3">
              &copy; {new Date().getFullYear()}{" "}
              <Link to="https://www.citricco.com"> Citricco </Link>
            </MDBCol>
          </MDBContainer>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};
