import {Box, ThemeIcon} from "@mantine/core";
import {IconFileText} from "@tabler/icons";
import React from "react";


const FileComponent = ({url, title, container_width}) => {
    return (
        <Box
            component="a"
            href={url}
            target="_blank"
            sx={(theme) => ({
                display: 'flex',
                flexDirection: "column",
                alignItems: "center",
                width: container_width < 500 ? "114px" : "140px",
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
                color: theme.colorScheme === 'dark' ? theme.white : theme.colors.blue[9],
                textAlign: 'center',
                padding: "10px 8px",
                borderRadius: theme.radius.md,
                cursor: 'pointer',
                fontWeight: 500,
                fontSize:  container_width < 500 ? ".7rem" : ".8rem",
                margin: "3px",
                '&:hover': {
                    backgroundColor:
                        theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[3],
                },
            })}
        >
            <ThemeIcon color={"green"}
                       size={50}
                       mb={15}
                       radius="xl">
                <IconFileText size={30}/>
            </ThemeIcon>
            {title}
        </Box>
    )
}

export default FileComponent