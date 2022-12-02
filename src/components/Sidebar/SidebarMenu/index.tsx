import React, {CSSProperties, useState} from "react";
import styled from "@emotion/styled";
import {GRAY_300} from "../../colors";
import {MantineTheme, useMantineTheme} from "@mantine/core";

const Container = styled.div<{ isOpen: boolean, theme: MantineTheme }>`
  background: ${({isOpen, theme}) => (
          theme.colorScheme === "dark"
                  ? (isOpen ? (theme.colors.blue[7]) : "unset")
                  : (isOpen ? (theme.colors.dark[7]) : "unset")
  )};
  padding: 0 5px;
  border-radius: 10px;
  margin-bottom: 3px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Row = styled.div<{ theme: MantineTheme, active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 2px;
  padding: 10px;
  color: ${({theme}) => (theme.colors.gray[2])};
  text-decoration: none;
  border-radius: 10px;
  background: ${({active, theme}) => (
          theme.colorScheme === "dark"
                  ? (active ? (theme.colors.blue[7]) : "unset")
                  : (active ? (theme.colors.dark[7]) : "unset")
  )};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  text-align: center;

  &:hover {
    background: ${({theme}) => (
            theme.colorScheme === "dark"
                    ? (theme.colors.blue[7])
                    : (theme.colors.dark[7])
    )};
  }
`;

const Icon = styled.div`
  color: ${GRAY_300};
`;

const Title = styled.div`
  flex-grow: 4;
  border-radius: 10px;
`;

const Count = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 2px 4px;
  min-width: 20px;
  height: 20px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`;

const SubMenuContent = styled.div`
  border-radius: 10px;
  text-align: center;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

type SidebarMenuTypes = {
    icon?: JSX.Element,
    title: string,
    count?: number,
    active?: boolean,
    children?: JSX.Element | JSX.Element[]
    style?: CSSProperties
}

const SidebarMenu: React.FC<SidebarMenuTypes> = ({
                                                     icon,
                                                     title,
                                                     count = 0,
                                                     active = false,
                                                     children = null,
                                                     ...props
                                                 }) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);


    const handleClick = () => {
        if (children === null) {
            return;
        }
        setIsSubMenuOpen(!isSubMenuOpen);
    };

    const useTheme = useMantineTheme()

    return (
        <Container theme={useTheme} isOpen={isSubMenuOpen} {...props}>
            <Row theme={useTheme} active={active} onClick={handleClick}>
                <Title>{title}</Title>
                {count > 0 && <Count>{count}</Count>}
                <Icon>{icon}</Icon>

            </Row>
            {isSubMenuOpen && <SubMenuContent>{children}</SubMenuContent>}
        </Container>
    );
}


export default SidebarMenu