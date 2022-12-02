import React, {useEffect, useRef, useState} from "react";
import {SwiperItemTypes, SwiperTypes} from "./imageSliderTypes";
import SwiperItem from "./SwiperItem";
import {getRefValue, useStateRef} from "./lib/hooks";
import {getTouchEventData} from "./lib/dom";
import {SwiperContainer, SwiperList, SwiperIndicator, SwiperIndicatorItem} from "./styles"
import {findLastIndex} from "lodash";

const MIN_SWIPE_REQUIRED = 40

const ImagesSliderPure: React.FC<SwiperTypes> = ({images}) => {
    const containerRef = useRef<HTMLUListElement>(null);
    const containerWidthRef = useRef(0)
    const minOffsetXRef = useRef(0)
    const currentOffsetXRef = useRef(0)
    const startXRef = useRef(0)

    const [currentIndex, setCurrentIndex] = useState(0)
    const [offsetX, setOffsetX, offsetXRef] = useStateRef(0)

    const onTouchMove = (e: MouseEvent | TouchEvent) => {
        const currentX = getTouchEventData(e).clientX
        const diff = getRefValue(startXRef) - currentX
        let newOffsetX = getRefValue(currentOffsetXRef) - diff

        const maxOffsetX = 0;
        const minOffsetX = getRefValue(minOffsetXRef);

        if (newOffsetX > maxOffsetX) {
            // newOffsetX = minOffsetX
            newOffsetX = maxOffsetX
        }
        if (newOffsetX < minOffsetX) {
            // newOffsetX = 0
            newOffsetX = minOffsetX
        }

        setOffsetX(newOffsetX)
    }
    const onTouchEnd = () => {
        const containerWidth = getRefValue(containerWidthRef)
        const currentOffsetX = getRefValue(currentOffsetXRef)

        let newOffsetX = getRefValue(offsetXRef)

        const diff = currentOffsetX - newOffsetX
        if (Math.abs(diff) > MIN_SWIPE_REQUIRED) {
            if (diff > 0) {
                // swipe to the right if diff is positive
                newOffsetX = Math.floor(newOffsetX / containerWidth) * containerWidth
            } else {
                // and vice versa :)
                newOffsetX = Math.ceil(newOffsetX / containerWidth) * containerWidth
            }
        } else {
            newOffsetX = Math.round(newOffsetX / containerWidth) * containerWidth
        }

        setOffsetX(newOffsetX)
        setCurrentIndex(Math.abs(newOffsetX / containerWidth))

        window.removeEventListener("touchmove", onTouchMove)
        window.removeEventListener("touchend", onTouchEnd)
        window.removeEventListener("mousemove", onTouchMove)
        window.removeEventListener("mouseup", onTouchEnd)
    }

    const onTouchStart = (e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {
        currentOffsetXRef.current = getRefValue(offsetXRef)
        startXRef.current = getTouchEventData(e).clientX

        const containerEl = getRefValue(containerRef)
        const containerWidth = containerEl.offsetWidth

        containerWidthRef.current = containerWidth
        minOffsetXRef.current = containerWidth - containerEl.scrollWidth // total width of swiper list

        window.addEventListener("mousemove", onTouchMove)
        window.addEventListener("mouseup", onTouchEnd)
        window.addEventListener("touchmove", onTouchMove)
        window.addEventListener("touchend", onTouchEnd)
    }

    const indicatorOnClick = (idx: number) => {
        const containerEl = getRefValue(containerRef)
        const containerWidth = containerEl.offsetWidth

        setCurrentIndex(idx)
        setOffsetX(-(containerWidth * idx))
    }


    return (
        <SwiperContainer
            onTouchStart={onTouchStart} onMouseDown={onTouchStart}
        >
            <SwiperList ref={containerRef} style={{transform: `translate3d(${offsetX}px, 0, 0)`}}>
                {images.map((image: SwiperItemTypes, idx: number) => {
                    return (
                        <SwiperItem key={idx} imageUrl={image.imageUrl} imageAlt={image.imageAlt}/>
                    )
                })}
            </SwiperList>
            <SwiperIndicator>
                {images.map((image: SwiperItemTypes, idx: number) => {
                    return (
                        <React.Fragment key={idx}>
                            <SwiperIndicatorItem onClick={() => indicatorOnClick(idx)} currentIndex={currentIndex}
                                                 idx={idx}/>
                        </React.Fragment>
                    )
                })}
            </SwiperIndicator>
        </SwiperContainer>
    );
};
export default ImagesSliderPure;