import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider {...settings}>
                    {this.props.imageUrl.map(elm =>
                        <div className="sliderimg">
                            <img src={elm} alt={elm.name}></img>
                        </div>
                    )}

                </Slider>
            </div>
        );
    }
}