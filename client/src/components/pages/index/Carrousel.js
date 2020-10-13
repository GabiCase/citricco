import React, { Component } from "react";
import Slider from "react-slick";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Carrousel.css'

import portada1 from './images/portada-1.jpg'
import portada2 from './images/portada-2.jpg'
import portada3 from './images/portada-3.jpg'
import portada4 from './images/portada-4.jpg'
import portada5 from './images/portada-5.jpg'
import portada6 from './images/portada-6.jpg'



export default class Carrrousel extends Component {


    render() {
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true
        };
        return (
            <div className="carrousel">

                <Slider {...settings}>
                    <div>
                        <img src={portada1} alt={'earrings'} />
                    </div>
                    <div>
                        <img src={portada4} alt={'earrings'} />
                    </div>
                    <div>
                        <img src={portada2} alt={'earrings'} />
                    </div>
                    <div>
                        <img src={portada5} alt={'earrings'} />
                    </div>
                    <div>
                        <img src={portada3} alt={'earrings'} />
                    </div>
                    <div>
                        <img src={portada6} alt={'earrings'} />
                    </div>
                </Slider>
            </div>
        );
    }
}