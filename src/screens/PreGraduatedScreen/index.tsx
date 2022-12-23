import React from "react";
import {PreGraduatedScreenContainer} from "./styles";
import {Paper, MantineTheme, useMantineTheme, Title, ThemeIcon, List} from '@mantine/core';
import TableOfContents from "../../components/TocComponent";
import {IconArrowBadgeRight} from "@tabler/icons";
import {useElementSize} from "@mantine/hooks";
import {donem_4_data} from "./data/donem_4_data";
import {donem_6_data} from "./data/donem_6_data";
import {receteler_data} from "./data/receteler_data";
import FileComponent from "../../components/FileComponent";

const PreGraduatedScreen: React.FC = () => {
    const theme: MantineTheme = useMantineTheme();
    const {ref: containerRef, width: containerWidth} = useElementSize()

    return (
        <PreGraduatedScreenContainer ref={containerRef} container_width={containerWidth}>
            <Paper shadow="lg" radius="md" mx={"auto"}  sx={{ width: containerWidth < 720 ? "100%" : "75%", padding: containerWidth < 500 ? "8px 10px" : "18px 25px"}}>

                <Title
                    id={"seminerler"}
                    weight={700}
                    order={2}
                    color={theme.colorScheme === "dark" ? theme.colors.yellow[8] : theme.colors.violet[9]}
                >
                    Seminerler
                </Title>
                <Title
                    id={"donem-4"}
                    weight={700}
                    order={3}
                    my={20}
                >
                    <List
                        size="lg"
                        center
                        icon={
                            <ThemeIcon color={theme.colorScheme === "dark" ? "teal" : "orange"}
                                       size={18}
                                       radius="xl">
                                <IconArrowBadgeRight size={14}/>
                            </ThemeIcon>
                        }
                    >
                        <List.Item sx={{
                            color: theme.colorScheme === "dark" ? theme.colors.yellow[8] : theme.colors.violet[9]
                        }}>
                            Dönem 4
                        </List.Item>
                    </List>
                </Title>
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center"
                }}>
                    {donem_4_data.map((item, index) => {
                        return (
                            <FileComponent container_width={containerWidth} key={index} title={item.title} url={item.url} />
                        )
                    })}
                </div>

                <Title
                    id={"donem-6"}
                    weight={700}
                    order={3}
                    my={20}
                >
                    <List
                        size="lg"
                        center
                        icon={
                            <ThemeIcon color={theme.colorScheme === "dark" ? "teal" : "orange"}
                                       size={18}
                                       radius="xl">
                                <IconArrowBadgeRight size={14}/>
                            </ThemeIcon>
                        }

                    >
                        <List.Item sx={{
                            color: theme.colorScheme === "dark" ? theme.colors.yellow[8] : theme.colors.violet[9]
                        }}>
                            Dönem 6
                        </List.Item>
                    </List>
                </Title>
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center"
                }}>
                    {donem_6_data.map((item, index) => {
                        return (
                            <FileComponent container_width={containerWidth} key={index} title={item.title} url={item.url} />
                        )
                    })}
                </div>

                <Title
                    id={"receteler"}
                    weight={700}
                    order={2}
                    color={theme.colorScheme === "dark" ? theme.colors.yellow[8] : theme.colors.violet[9]}
                    my={20}
                >
                    Reçeteler
                </Title>

                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center"
                }}>
                    {receteler_data.map((item, index) => {
                        return (
                            <FileComponent container_width={containerWidth} key={index} title={item.title} url={item.url} />
                        )
                    })}
                </div>
            </Paper>
            <TableOfContents headings={[
                {
                    id: "seminerler",
                    title: "Seminerler",
                    order: 2
                },
                {
                    id: "donem-4",
                    title: "Dönem 4",
                    order: 3
                },
                {
                    id: "donem-6",
                    title: "Dönem 6",
                    order: 3
                },
                {
                    id: "receteler",
                    title: "Reçeteler",
                    order: 2
                },
            ]} container_width={containerWidth}/>
        </PreGraduatedScreenContainer>
    )
}

export default PreGraduatedScreen
