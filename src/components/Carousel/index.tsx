import {Carousel, Embla, useAnimationOffsetEffect} from '@mantine/carousel';
import React, {useEffect, useRef, useState} from "react";
import Autoplay from 'embla-carousel-autoplay';
import {ImagesTypes} from "./imageSliderTypes";
import {MantineTheme, useMantineTheme} from "@mantine/core";
import {useMediaQuery, useElementSize} from '@mantine/hooks';

const ImageCarousel: React.FC<ImagesTypes> = ({images, width, height, isOpen}) => {
    const autoplay = useRef(Autoplay({delay: 4000}));
    const theme: MantineTheme = useMantineTheme();
    const {ref: imageRef, width: imageWidth} = useElementSize();
    const TRANSITION_DURATION = 200;
    const [embla, setEmbla] = useState<Embla | null>(null);
    useAnimationOffsetEffect(embla, TRANSITION_DURATION);
    const xs = useMediaQuery(`(max-width: ${theme.breakpoints.xs}px)`);
    const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
    const md = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);
    const lg = useMediaQuery(`(max-width: ${theme.breakpoints.lg}px)`);

    // const xl = useMediaQuery(`(max-width: ${theme.breakpoints.xl}px)`);

    return (
        <Carousel
            mx="auto"
            getEmblaApi={setEmbla}
            withIndicators
            dragFree={false}
            loop
            slideGap={"md"}
            align="center"
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            styles={(theme) => ({
                root: {
                    width: imageWidth,
                },
                slide: {
                    width: "100%",
                    display: "flex",
                    justifyContent: "center"
                },
                container: {
                    display: "flex",
                },
                indicator: {
                    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.blue[4],
                    width: 12,
                    height: 12,
                    transition: 'width 250ms ease',
                    '&[data-active]': {width: 40},
                },
                indicators: {
                    bottom: -25,
                },
            })}
        >
            {images.map((image, idx: number) => {
                return (
                    <Carousel.Slide key={idx}>
                        <img ref={imageRef} style={{
                            width:
                            // xs ? 300
                            //     : sm ? theme.breakpoints.xs
                            //         : md ? theme.breakpoints.sm - 200
                            //             : lg ? theme.breakpoints.md - 200 : 1000,
                                xs ? theme.breakpoints.xs - 150
                                    : sm ? (!isOpen ? (theme.breakpoints.sm - 220 - 150) : (theme.breakpoints.sm - 150))
                                        : md ? (isOpen ? (theme.breakpoints.md - 220 - 250) : (theme.breakpoints.md - 250))
                                            : lg ? (isOpen ? (700) : (920)) : (1000),
                            // with this conditional (depend on "isOpen") css, carousel is not working properly ?
                            objectFit: "contain",
                        }}
                             src={image.imageUrl} alt={image.imageAlt}
                        />
                    </Carousel.Slide>
                )
            })}
        </Carousel>

    );
}

export default ImageCarousel