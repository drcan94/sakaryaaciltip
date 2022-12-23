import React from "react";
import {OnlineEducationalVideosScreenContainer} from "./styles";
import {Paper, Badge, MantineTheme, useMantineTheme, Center, AspectRatio} from '@mantine/core';


const OnlineEducationalVideosScreen: React.FC = () => {
    const theme: MantineTheme = useMantineTheme();
    return (
        <OnlineEducationalVideosScreenContainer>
            <Paper shadow="lg" radius="md" p="md" sx={{
                maxWidth: 1250,
                minWidth: "80%"
            }}>
                <Center style={{
                    marginBottom: 20
                }}>
                    <div style={{maxWidth: 350}}>
                        <Badge variant="outline" size={"xl"} radius={"sm"}
                               color={theme.colorScheme === "dark" ? "green" : "dark"} fullWidth>
                            Online Eğitim Videolarımız
                        </Badge>
                    </div>
                </Center>



                    <Center mb={"md"}>
                        <AspectRatio
                            ratio={6.5 / 3.4}
                            sx={{width: "100%"}}
                        >
                            <iframe
                                style={{borderRadius: 16}}
                                src="https://www.youtube.com/embed/vrrwtkmof0w"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                        </AspectRatio>

                    </Center>

                    <Center mb={"md"}>
                        <AspectRatio
                            ratio={6.5 / 3.4}
                            sx={{width: "100%"}}
                        >
                            <iframe src="https://www.youtube.com/embed/i3v4UJCfgws"
                                    style={{borderRadius: 16}}

                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        </AspectRatio>

                    </Center>
                    <Center mb={"md"}>
                        <AspectRatio
                            ratio={6.5 / 3.4}
                            sx={{width: "100%"}}
                        >
                            <iframe src="https://www.youtube.com/embed/MzguP8vihRY"
                                    style={{borderRadius: 16}}

                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        </AspectRatio>

                    </Center>
                    <Center mb={"md"}>
                        <AspectRatio
                            ratio={6.5 / 3.4}
                            sx={{width: "100%"}}
                        >
                            <iframe src="https://www.youtube.com/embed/GztosRu68kQ"
                                    style={{borderRadius: 16}}

                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        </AspectRatio>

                    </Center>
            </Paper>
        </OnlineEducationalVideosScreenContainer>
    )
}

export default OnlineEducationalVideosScreen
