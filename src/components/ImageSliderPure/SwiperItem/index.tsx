import React from "react";
import {SwiperItemTypes} from "../imageSliderTypes";
import {ItemContainer, SwiperImg} from "./styles";

const SwiperItem: React.FC<SwiperItemTypes> = ({imageUrl, imageAlt}) => {
    return (
        <ItemContainer>
            <SwiperImg src={imageUrl} alt={imageAlt} draggable={false}/>
        </ItemContainer>
    )
}

export default SwiperItem