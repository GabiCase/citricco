import React, { Component } from "react";
import "./TrendCarrousel.css";
import Slider from "react-slick";

import { Link } from 'react-router-dom'

export default class TrendCarrousel extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="trending">
        <h4> Trending now </h4>
        <Slider {...settings}>
          <div>
            <Link to="/products/details/5f8594305f9d33184cdb6504">
              <img
                src="https://res.cloudinary.com/def9y4z86/image/upload/v1602589778/citricco/figleaf2_ijwi8v.jpg"
                alt="fig-leaf earring"
              />
            </Link>
          </div>
          <div>
            <Link to="/products/details/5f85aac90467fd4a28702baf">
              <img
                src="https://res.cloudinary.com/def9y4z86/image/upload/v1602595573/citricco/vera5_veddgl.jpg"
                alt="vera earring"
              />
            </Link>
          </div>
          <div>
            <Link to="/products/details/5f85a8db5f9d33184cdb6508">
              <img src="https://res.cloudinary.com/def9y4z86/image/upload/v1602595012/citricco/debaja.jpg.jpg" alt="be baja earring" />
            </Link>
          </div>
          <div>
            <Link to="/products/details/5f85ac0b0467fd4a28702bb0">
              <img src="https://res.cloudinary.com/def9y4z86/image/upload/v1602595934/citricco/medusa4_ayibil.jpg" alt="medua earring" />
            </Link>
          </div>
          <div>
            <Link to="/products/details/5f8595de5f9d33184cdb6506">
              <img src="https://res.cloudinary.com/def9y4z86/image/upload/v1602590376/citricco/clea2_beymiz.jpg" alt=" clea earring" />
            </Link>
          </div>
          <div>
            <Link to="/products/details/5f85931f5f9d33184cdb6503">
              <img src="https://res.cloudinary.com/def9y4z86/image/upload/v1602589504/citricco/primas6_ntvyls.jpg" alt="prisma earring" />
            </Link>
          </div>
          <div>
            <Link to="/products/details/5f8595265f9d33184cdb6505">
              <img src="https://res.cloudinary.com/def9y4z86/image/upload/v1602590000/citricco/petal3_cl9uor.jpg" alt="petal earring" />
            </Link>
          </div>
          <div>
            <Link to="/products/details/5f8591ad5f9d33184cdb6502">
              <img src="https://res.cloudinary.com/def9y4z86/image/upload/v1602588841/citricco/celaya3_xmyrmu.jpg" alt="celaya earring" />
            </Link>
          </div>
        </Slider>
      </div>
    );
  }
}
