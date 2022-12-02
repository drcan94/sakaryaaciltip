// npm i sass swiper
import "./slider.scss"
import React, {useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Thumbs, Navigation} from "swiper";
import {Link} from "react-router-dom";
const ImagesSliderThumb = ({images}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    console.log(thumbsSwiper)

    return (
        <React.Fragment>
            <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation, Thumbs]}
                grabCursor={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                className={"product-images-slider"}
            >
                {images.map((image, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <Link to={`/${i}`}>
                                <img src={image} alt="Slider"/>
                            </Link>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                modules={[Navigation, Thumbs]}
                className={"product-images-slider-thumbs"}
            >
                {images.map((image, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <div className={"product-images-slider-thumbs-wrapper"}>
                                <img src={image} alt="Thumb"/>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </React.Fragment>
    );
};
export default ImagesSliderThumb;