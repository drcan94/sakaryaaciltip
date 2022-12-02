import styled from "@emotion/styled";
import React from "react";
import {MantineTheme, useMantineTheme} from '@mantine/core';
import {IconHome, IconArrowBigLeftLines, IconArrowBigRightLines} from '@tabler/icons';
import {Link} from "react-router-dom";
import StyledThemeIcon from "../../StyledThemeIcon";

const Container = styled.div<{ theme: MantineTheme, width: number, screenWidth: number }>`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({width}) => width};
  height: 60px;
  border-bottom: 1.5px solid ${({theme}) => theme.colorScheme === "dark" ? theme.colors.yellow[6] : theme.colors.dark[7]};
  @media (max-width: 450px) {
    width: ${({screenWidth}) => `${screenWidth}px`};
  }
`;

const ArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  width: fit-content;
  height: 60px;
  cursor: pointer;
`;


const TopSideBar = ({rtl, leftArrowClicked, sideBarWidth, screenWidth, isOpen, ...props}) => {

    const handleClick = () => leftArrowClicked();
    const iconClickHandler = () => screenWidth <= 768 && !isOpen && handleClick();
    const theme = useMantineTheme()

    return (
        <Container theme={theme} width={sideBarWidth} screenWidth={screenWidth} {...props}>
            <Link to={"/"}>
                <div onClick={iconClickHandler}>

                    <StyledThemeIcon>
                        <IconHome/>
                    </StyledThemeIcon>
                </div>
            </Link>
            <ArrowContainer onClick={handleClick}>
                <StyledThemeIcon>
                    {!rtl
                        ? <IconArrowBigLeftLines/>
                        : <IconArrowBigRightLines/>
                    }
                </StyledThemeIcon>
            </ArrowContainer>
        </Container>
    );
};

export default TopSideBar;