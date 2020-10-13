import React, { Component } from "react";
import './TrendCarrousel.css'
import Slider from "react-slick";


export default class TrendCarrousel extends Component {
    render() {
        var settings = {
            dots: true,
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
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="trending">
                <h2> Trending now </h2>
                <Slider {...settings}>
                    <div>
                        <img src="https://res.cloudinary.com/def9y4z86/image/upload/v1602589778/citricco/figleaf2_ijwi8v.jpg" alt="fig-leaf earring" />
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/def9y4z86/image/upload/v1602595573/citricco/vera5_veddgl.jpg" alt="vera earring" />
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/def9y4z86/image/upload/v1602595012/citricco/debaja.jpg.jpg" />
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                    <div>
                        <h3>7</h3>
                    </div>
                    <div>
                        <h3>8</h3>
                    </div>
                </Slider>
            </div>
        );
    }
}