import React from "react";
import {StyledAccordion} from "./styles";
import {StaffDataProps} from "./types";
import {Accordion, MantineNumberSize, MantineTheme, Text, useMantineTheme} from "@mantine/core";
import parse from "html-react-parser";
import {useMediaQuery} from "@mantine/hooks";
import AccordionLabel from "./AccordionLabel";

const isFilled = (content: string) => content.length !== 0
const renderedContent = (content: string) => isFilled(content) ? parse(content) : "------------------------"

type AccordionTypes = {
    container_width: number,
    data: StaffDataProps[]
}

const CustomAccordion: React.FC<AccordionTypes> = ({container_width, data}) => {
    const theme: MantineTheme = useMantineTheme();
    const md = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);

    const size: MantineNumberSize = md ? "md" : "lg"

    return (
        <StyledAccordion container_width={container_width} chevronPosition="right" variant="contained">
            {data.map((item) => (
                <Accordion.Item value={item.id.toString()} key={item.label}>
                    <Accordion.Control>
                        <AccordionLabel {...item} />
                    </Accordion.Control>
                    <Accordion.Panel>
                        <Text align={isFilled(item.content) ? "start" : "center"}
                              size={size}>{renderedContent(item.content)}</Text>
                    </Accordion.Panel>
                </Accordion.Item>
            ))}
        </StyledAccordion>
    )
}

export default CustomAccordion