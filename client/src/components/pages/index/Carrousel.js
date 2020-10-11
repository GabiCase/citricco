import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
            <div>

                <Slider {...settings}>
                    <div>
                        <img src="https://decoideas-static.hola.com/srdpserendipia/wp-content/uploads/sites/20/2016/07/CALACATTA_C01-1024x505.jpg" />
                    </div>
                    <div>
                        <img src="https://www.itrisa.com/IMAGES%20PIEDRA/MARMOLES/Marmoles%20Importacion/Verde%20Indio/Marmol%20Verde%20Indio%20Foto.jpg" />
                    </div>
                    <div>
                        <img src="https://www.tinostone.com/wp-content/uploads/2019/09/tipos_vetas_marmol_piedra-848x450.jpg" />
                    </div>
                    <div>
                        <img src="https://www.tinostone.com/wp-content/uploads/2019/01/Marmol_vetas_doradas-848x450.jpg" />
                    </div>
                    <div>
                        <img src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/22021.png" />
                    </div>
                    <div>
                        <img src="https://thumbs.dreamstime.com/b/textura-y-fondo-de-m%C3%A1rmol-blancos-78424807.jpg" />
                    </div>
                </Slider>
            </div>
        );
    }
}