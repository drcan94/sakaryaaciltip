import React, {useEffect, useState} from "react";
import {NavContainer} from "./styles";
import {createStyles, Box, Text, Group} from '@mantine/core';
import {IconListSearch} from '@tabler/icons';

interface TableOfContentsProps {
    headings: { title: string; id: string; order: number }[];
    container_width: number
}


const useStyles = createStyles((theme) => ({
    link: {
        ...theme.fn.focusStyles(),
        display: 'block',
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        lineHeight: 1.2,
        fontSize: theme.fontSizes.sm,
        padding: theme.spacing.xs,
        borderTopRightRadius: theme.radius.sm,
        borderBottomRightRadius: theme.radius.sm,
        borderLeft: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
        }`,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
    },

    linkActive: {
        fontWeight: 500,
        borderLeftColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 6 : 7],
        color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 2 : 7],

        '&, &:hover': {
            backgroundColor:
                theme.colorScheme === 'dark'
                    ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
                    : theme.colors[theme.primaryColor][0],
        },
    },
}));


const TableOfContents: React.FC<TableOfContentsProps> = ({headings, container_width}) => {

    const [active, setActive] = useState(0);
    const {classes, cx} = useStyles();

    const Headings = () => {
        return (
            <React.Fragment>
                {headings.map((heading, index) => (
                    <Box<'a'>
                        component="a"
                        href={`#${heading.id}`}
                        onClick={(event) => {
                            setActive(index);
                        }}
                        key={heading.title}
                        className={cx(classes.link, {[classes.linkActive]: active === index})}
                        sx={(theme) => ({paddingLeft: (heading.order) * theme.spacing.xs - 15})}
                    >
                        {heading.title}
                    </Box>
                ))}
            </React.Fragment>
        )
    }


    return (
        <NavContainer container_width={container_width}>
            <Group mb="md">
                <IconListSearch size={18} stroke={1.5}/>
                <Text>İçerik Haritası</Text>
            </Group>
            <Headings/>
        </NavContainer>
    );
}


export default TableOfContents;