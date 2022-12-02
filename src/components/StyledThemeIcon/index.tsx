import styled from "@emotion/styled";
import React from "react";
import {MantineTheme, ThemeIcon, useMantineTheme} from "@mantine/core";

const ThemeIconContainer = styled(ThemeIcon)<{ theme: MantineTheme }>`
  padding: 7px;

  &:hover {
    background-color: ${({theme}) => theme.colorScheme === "dark" ? theme.colors.blue[7] : theme.colors.dark[7]};
  }
`

type LogoTypes = {
    children: JSX.Element
}

const StyledThemeIcon: React.FC<LogoTypes> = ({children}) => {
    const theme = useMantineTheme();

    return (
        <ThemeIconContainer size={40} ml={5} color="none" theme={theme}>
            {children}
        </ThemeIconContainer>
    );
}

export default StyledThemeIcon
