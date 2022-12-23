import {Carousel, Embla} from '@mantine/carousel';
import React, {useRef, useState} from "react";
import Autoplay from 'embla-carousel-autoplay';
import {ImagesTypes} from "./imageSliderTypes";
import {MantineTheme, useMantineTheme} from "@mantine/core";
import {useMediaQuery} from '@mantine/hooks';
import useCustomAnimationOffsetEffect from "./hooks/useCustomAnimationOffsetEffect";

const ImageCarousel: React.FC<ImagesTypes> = ({images, container_width}) => {
    const theme: MantineTheme = useMantineTheme();
    const xs = useMediaQuery(`(max-width: ${theme.breakpoints.xs}px)`);
    const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
    const md = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);
    const lg = useMediaQuery(`(max-width: ${theme.breakpoints.lg}px)`);

    const autoplay = useRef(Autoplay({delay: 2000}));

    const [embla, setEmbla] = useState<Embla | null>(null);
    useCustomAnimationOffsetEffect(embla, 0, container_width)
    return (
        <Carousel
            mx="auto"
            getEmblaApi={setEmbla}
            withIndicators
            dragFree={false}
            loop
            slideGap={xs ? "xs" : sm ? "sm" : md ? "md" : lg ? "lg" : "xl"}
            align="center"
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            styles={(theme) => ({
                root: {
                    width: container_width,
                },
                slide: {
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
                viewport: {
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16                }
            })}
        >
            {images.map((image, idx: number) => {
                return (
                    <Carousel.Slide key={idx}>
                        <img style={{
                            width: container_width,
                            objectFit: "cover",
                            borderBottomLeftRadius: 16,
                            borderBottomRightRadius: 16
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