import {Carousel} from '@mantine/carousel';
import React, {useRef} from "react";
import Autoplay from 'embla-carousel-autoplay';
import {ImagesTypes} from "./imageSliderTypes";
import {Image, MantineTheme, useMantineTheme} from "@mantine/core";
import {useMediaQuery} from '@mantine/hooks';

const ImageCarousel: React.FC<ImagesTypes> = ({images, width, isOpen}) => {
    const autoplay = useRef(Autoplay({delay: 1600}));
    const theme: MantineTheme = useMantineTheme();

    const xs = useMediaQuery(`(max-width: ${theme.breakpoints.xs}px)`);
    const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
    const md = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);
    const lg = useMediaQuery(`(max-width: ${theme.breakpoints.lg}px)`);
    // const xl = useMediaQuery(`(max-width: ${theme.breakpoints.xl}px)`);

    return (
        <Carousel
            mx="auto"
            withIndicators
            dragFree={false}
            loop
            slideGap={"md"}
            align="start"
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            styles={(theme) => ({
                container: {
                    transition: "all .25s linear",
                },
                slide: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                },
                controls: {
                    marginRight: "auto",
                    marginLeft: "auto",
                    maxWidth:
                        xs ? width * .95 : sm ? width * .87 : md ? width * .75 : lg ? width * .65 : width * .55
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
                viewport: {}

            })}
        >
            {images.map((image, idx: number) => {
                return (
                    <Carousel.Slide key={idx}>
                        <Image
                            styles={(theme, params) => ({
                                root: {
                                    maxWidth:
                                        xs ? width * .95 : sm ? width * .87 : md ? width * .75 : lg ? width * .65 : width * .55
                                }
                            })}
                            fit={"contain"}
                            src={image.imageUrl} alt={image.imageAlt}
                        />
                    </Carousel.Slide>
                )
            })}

        </Carousel>
    );
}

export default ImageCarousel