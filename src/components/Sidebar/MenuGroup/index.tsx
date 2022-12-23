import styled from "@emotion/styled";
import React from "react";
import {MantineTheme, useMantineTheme} from "@mantine/core";

const Container = styled.div`
  margin-top: 20px;
`;

const Title = styled.div<{ theme: MantineTheme }>`
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  color: ${({theme}) => theme.colorScheme === "dark"
          ? theme.colors.yellow[9]
          : theme.colors.yellow[6]}

`;

const Content = styled.div`
  padding-top: 10px;
`;


export default function MenuGroup({title, children}) {
    const useTheme = useMantineTheme()
    return (
        <Container>
            <Title theme={useTheme}>{title}</Title>
            <Content>{children}</Content>
        </Container>
    );
}