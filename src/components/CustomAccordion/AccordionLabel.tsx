import {StaffLabelProps} from "./types";
import {Avatar, Group, Text, createStyles, useMantineTheme} from "@mantine/core";
import React from "react";
import {useMediaQuery} from "@mantine/hooks";

const useStyles = createStyles((theme, _params, getRef) => ({
    placeHolder: {
        backgroundColor: "transparent"
    }
}));
const AccordionLabel = ({label, image, description}: StaffLabelProps) => {
    const {classes} = useStyles();
    const theme = useMantineTheme();
    const md = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);
    return (
        <Group noWrap>
            <Avatar
                classNames={{placeholder: classes.placeHolder}}
                src={image.length !== 0 ? image : null}
                size={md ? "md" : "xl"}
            />
            <div>
                <Text>{label}</Text>
                <Text size="sm" color="dimmed" weight={400}>
                    {description}
                </Text>
            </div>
        </Group>
    );
}

export default AccordionLabel