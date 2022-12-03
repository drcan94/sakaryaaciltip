import {HomeScreenContainer} from "./styles";
import React from "react";
// import {allImages} from '../../components/ImageSliderThumb/assets'
// import {allImages} from '../../components/ImageSliderPure/images'
import {allImages} from '../../components/Carousel/images'
import ImageCarousel from "../../components/Carousel";
// import {Image} from "@mantine/core";


// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// import "swiper/css";
// import "swiper/css/navigation"
// import "swiper/css/thumbs"

// import ImagesSliderThumb from "../../components/ImageSliderThumb";
// import ImageSliderPure from "../../components/ImageSliderPure";

const HomeScreen: React.FC<{ width: number, isOpen:boolean }> = ({width,isOpen}) => {
    return (
        <HomeScreenContainer className={"helllo"}>
            {/*<ImagesSliderThumb images={allImages}/>*/}
            {/*<ImageSliderPure images={allImages}/>*/}
            <ImageCarousel isOpen={isOpen} width={width} images={allImages}/>
            {/*<Carousel*/}
            {/*    showThumbs={true} // Show thumbnail images*/}
            {/*    infiniteLoop={true} // Make the carousel loop infinitely*/}
            {/*    showStatus={false} // Don't show the status indicator*/}
            {/*    showIndicators={false} // Don't show the control indicators*/}
            {/*    autoPlay={true}*/}
            {/*    interval={1500}*/}
            {/*>*/}
            {/*    {allImages.map((image, idx: number) => {*/}
            {/*        return (*/}
            {/*            <div >*/}
            {/*                <img src={image.imageUrl} />*/}
            {/*            </div>*/}
            {/*        )*/}
            {/*    })}*/}


            {/*</Carousel>*/}
        </HomeScreenContainer>
    )
}

export default HomeScreen
