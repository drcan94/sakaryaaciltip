import {HomeScreenContainer} from "./styles";
import React from "react";
import {Blockquote, MantineTheme, Paper, useMantineTheme} from '@mantine/core';
import {allImages} from '../../components/Carousel/images'
import ImageCarousel from "../../components/Carousel";
import {useElementSize, useMediaQuery} from "@mantine/hooks";

const HomeScreen: React.FC = () => {
    const {ref: containerRef, width: containerWidth} = useElementSize();
    const theme: MantineTheme = useMantineTheme();
    const xs = useMediaQuery(`(max-width: ${theme.breakpoints.xs}px)`);
    const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
    const md = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);
    return (
        <HomeScreenContainer>

            <Paper
                ref={containerRef}
                sx={{
                    border: "1.5px solid gray",
                    width: sm ? "100%" : md ? "90%" :  "60%"
                }}
                radius={"lg"} bg={theme.colors.blue[1]}
            >
                <Blockquote
                    styles={(theme) => ({
                        root: {
                            fontSize: md ? theme.fontSizes.md + 1 : theme.fontSizes.lg + 1,
                            color: theme.colors.dark[9]
                        },
                        cite: {
                            fontSize: xs ? theme.fontSizes.xs - 1 : sm ? theme.fontSizes.sm - 1 : md ? theme.fontSizes.md - 1 : theme.fontSizes.lg - 3,
                            color: theme.colors.orange[7],
                            fontWeight: 500
                        }
                    })}
                    color={"indigo"}
                    cite="– SAÜ ACİL">
                    Kalbini durduracak kadar sevimli, yeniden başlatacak kadar yetenekli!
                </Blockquote>
                <ImageCarousel container_width={containerWidth} images={allImages}/>
            </Paper>
        </HomeScreenContainer>
    )
}

export default HomeScreen
