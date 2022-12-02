import {HomeScreenContainer} from "./styles";
import React from "react";
// import {allImages} from '../../components/ImageSliderThumb/assets'
// import {allImages} from '../../components/ImageSliderPure/images'
import {allImages} from '../../components/Carousel/images'
import ImageCarousel from "../../components/Carousel";

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
        </HomeScreenContainer>
    )
}

export default HomeScreen
