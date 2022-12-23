import {
    StyledMissionAccordion,
    StyledValuesAccordion,
    StyledVisionAccordion,
    VisionMissionScreenContainer
} from "./styles";
import React from "react";
import {Accordion, createStyles, List, ThemeIcon, useMantineTheme} from '@mantine/core';
import {useElementSize} from "@mantine/hooks";
import {IconChevronDown, IconChevronLeft, IconChevronRight} from "@tabler/icons"

const useStyles = createStyles((theme, _params, getRef) => ({
    root: {
        borderRadius: theme.radius.xs,
    },
    item: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        border: 'none',
        position: 'relative',
        zIndex: 0,
        borderRadius: theme.radius.md,
        transition: 'transform 150ms ease',
        '&[data-active]': {
            transform: 'scale(1.015)',
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
            boxShadow: theme.shadows.md,
            borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
            zIndex: 1,
        },
    },
    control: {
        borderRadius: theme.radius.md,
    },
    label: {
        fontWeight: 700
    },
    content: {
        [theme.fn.largerThan('md')]: {minHeight: 200},
        paddingTop: 20
    },
    chevron: {
        '&[data-rotate]': {
            transform: 'rotate(-180deg)',
        },
    },
}));

const VisionMissionScreen: React.FC<{ rtl: any }> = ({rtl}) => {
    const {ref: containerRef, width: containerWidth} = useElementSize()
    const {classes} = useStyles();
    const theme = useMantineTheme()
    return (
        <VisionMissionScreenContainer ref={containerRef}>
            <StyledVisionAccordion chevron={<IconChevronDown size={14}/>} container_width={containerWidth}
                                   className={classes.root} classNames={classes}
                                   variant="separated" chevronPosition="left" defaultValue="1">
                <Accordion.Item value="1">
                    <Accordion.Control sx={{
                        backgroundColor: theme.colorScheme === "dark" ? theme.colors.yellow[7] : theme.colors.red[7],
                        color: "white",
                    }}>Vizyonumuz</Accordion.Control>
                    <Accordion.Panel>
                        <List
                            spacing="xs"
                            size="md"
                            center
                            icon={
                                <ThemeIcon color={theme.colorScheme === "dark" ? "teal" : "orange"}
                                           size={18}
                                           radius="xl">
                                    {
                                        !rtl ? <IconChevronRight size={14}/> : <IconChevronLeft size={14}/>
                                    }
                                </ThemeIcon>
                            }
                        >
                            <List.Item>
                                Bilim - sağlık ve iyileştirme sanatında mükemmellik misyonumuzu destekleyen kaliteli
                                acil tıp uzmanlık eğitimi programlarını uygulamak
                            </List.Item>
                            <List.Item>
                                Sağlık hizmetinin gelişimini öngören esnek, duyarlı ve yenilikçi acil tıp uzmanlık
                                eğitimi programları uygulamak.
                            </List.Item>

                        </List>
                    </Accordion.Panel>
                </Accordion.Item>
            </StyledVisionAccordion>
            <StyledMissionAccordion chevron={<IconChevronDown size={14}/>} container_width={containerWidth}
                                    classNames={classes}
                                    variant="separated" chevronPosition="left" defaultValue="2">
                <Accordion.Item value="2">
                    <Accordion.Control sx={{
                        backgroundColor: theme.colorScheme === "dark" ? theme.colors.red[7] : theme.colors.blue[7],
                        color: "white",
                    }}>Misyonumuz</Accordion.Control>
                    <Accordion.Panel>
                        <List
                            spacing="xs"
                            size="md"
                            center
                            icon={
                                <ThemeIcon color={theme.colorScheme === "dark" ? "teal" : "orange"} size={18}
                                           radius="xl">

                                    {
                                        !rtl ? <IconChevronRight size={14}/> : <IconChevronLeft size={14}/>
                                    }
                                </ThemeIcon>
                            }
                        >
                            <List.Item>
                                Acil sağlık hizmetlerine ihtiyaç duyan tüm hastalarımıza saygı ve özen içinde kaliteli
                                bakı hizmetleri sunarken; akademik anlamda etkin ve çağdaş eğitim yaklaşım tarzı
                                ortaya koyarak önde gelen Acil Tıp Kliniklerinden olmaktır.
                            </List.Item>

                        </List>
                    </Accordion.Panel>
                </Accordion.Item>
            </StyledMissionAccordion>
            <StyledValuesAccordion chevron={<IconChevronDown size={14}/>} container_width={containerWidth}
                                   classNames={classes}
                                   variant="separated" chevronPosition="left" defaultValue="3">
                <Accordion.Item value="3">
                    <Accordion.Control sx={{
                        backgroundColor: theme.colorScheme === "dark" ? theme.colors.blue[7] : theme.colors.yellow[7],
                        color: "white",
                    }}>Değerler</Accordion.Control>
                    <Accordion.Panel>
                        <List
                            spacing="xs"
                            size="md"
                            center
                            icon={
                                <ThemeIcon color={theme.colorScheme === "dark" ? "teal" : "orange"} size={18}
                                           radius="xl">
                                    {
                                        !rtl ? <IconChevronRight size={14}/> : <IconChevronLeft size={14}/>
                                    }
                                </ThemeIcon>
                            }
                        >
                            <List.Item>Kararlılık</List.Item>
                            <List.Item>İnsan hayatına saygı göstermek ve destek olmak</List.Item>
                            <List.Item>Yüksek performans ve doğrulanabilirlik</List.Item>
                            <List.Item>Sürekli öğrenme ve gelişim</List.Item>
                            <List.Item>Sosyal bilinç</List.Item>


                        </List>
                    </Accordion.Panel>
                </Accordion.Item>
            </StyledValuesAccordion>
        </VisionMissionScreenContainer>
    )
}

export default VisionMissionScreen
