import {Carousel, Embla, useAnimationOffsetEffect} from '@mantine/carousel';
import React, {useRef, useState} from "react";
import Autoplay from 'embla-carousel-autoplay';
import {ImagesTypes} from "./imageSliderTypes";
import {MantineTheme, useMantineTheme} from "@mantine/core";
import {useMediaQuery} from '@mantine/hooks';

const ImageCarousel: React.FC<ImagesTypes> = ({images, width, isOpen}) => {
    const autoplay = useRef(Autoplay({delay: 1600}));
    const theme: MantineTheme = useMantineTheme();
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
            align="start"
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            styles={(theme) => ({
                slide: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                },
                controls: {
                    marginRight: "auto",
                    marginLeft: "auto",
                    maxWidth: xs ? width * .95 : sm ? width * .87 : md ? width * .75 : lg ? width * .65 : width * .55
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
                    maxWidth: xs ? width * .95 : sm ? width * .87 : md ? width * .75 : lg ? width * .65 : width * .55,
                    marginRight: "auto",
                    marginLeft: "auto",
                },
            })}
        >
            {images.map((image, idx: number) => {
                return (
                    <Carousel.Slide key={idx}>
                        <img style={{
                            maxWidth: xs ? width * .95 : sm ? width * .87 : md ? width * .75 : lg ? width * .65 : width * .55,
                            objectFit: "cover"
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