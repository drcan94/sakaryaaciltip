import React, {useState} from "react";
import {Link} from "react-router-dom";
import StyledThemeIcon from "../StyledThemeIcon";
import {IconArrowBigRightLines, IconArrowBigLeftLines, IconHome} from "@tabler/icons";
import {MantineTheme, useMantineTheme, createStyles} from "@mantine/core";
import styled from "@emotion/styled";

const TopMenuContainer = styled.div<{ theme: MantineTheme, top: string, isClose: boolean }>`
  position: fixed;
  top: ${({top}) => top};
  left: 0;
  width: 100%;
  height: 60px;
  background-color: ${({theme}) => theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.blue[9]};
  display: flex;
  justify-content: ${({isClose}) => (isClose ? "flex-end" : "space-between")};
  align-items: center;
  z-index: 1;
  transition: 0.4s all;
  border-bottom: 2.5px solid ${({theme}) => theme.colorScheme === "dark" ? theme.colors.yellow[6] : theme.colors.dark[7]};

  @media (max-width: 768px) {
    justify-content: ${({isClose}) =>
            isClose ? `space-between` : `flex-end`};
  }
`;

const Icons = styled.div`
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 60px;
`;

const LeftContainer = styled(Icons)<{ isClose: boolean }>`
  display: ${({isClose}) => (isClose ? `none` : `flex`)};
  width: fit-content;
  @media (max-width: 768px) {
    display: ${({isClose}) => (isClose ? `flex` : `none`)};
  }
`;

const RightContainer = styled(Icons)<{ theme: MantineTheme, isClose: boolean }>`
  width: ${({isClose}) => (isClose ? `calc(100% - 220px)` : `100%`)};
  justify-content: center;
  display: flex;
  padding: 0 10px;
  font-weight: 500;
  color: ${({theme}) => theme.colorScheme === "dark" ? theme.colors.yellow[6] : theme.colors.gray[2]};
  @media (max-width: 768px) {
    width: ${({isClose}) => (!isClose ? `calc(100% - 220px)` : `100%`)};
  }
`;

const useStyles = createStyles((theme) => ({
    responsiveTextSize: {
        fontSize: theme.fontSizes.xl,

        [theme.fn.smallerThan('lg')]: {
            fontSize: theme.fontSizes.lg,
        },

        [theme.fn.smallerThan('md')]: {
            fontSize: theme.fontSizes.md,
        },

        [theme.fn.smallerThan('sm')]: {
            fontSize: theme.fontSizes.sm,
        }
    },
}));


const TopMenu = ({rtl, top, isClose, rightArrowClicked}) => {


    const handleClick = () => rightArrowClicked()
    const theme = useMantineTheme()
    const {classes} = useStyles();

    return (
        <TopMenuContainer dir={rtl ? 'rtl' : 'ltr'} theme={theme} top={top} isClose={isClose}>
            <LeftContainer isClose={isClose}>
                <Link to={"/"}>
                    <StyledThemeIcon>
                        <IconHome/>
                    </StyledThemeIcon>
                </Link>
                <div onClick={handleClick}>
                    <StyledThemeIcon>
                        {!rtl
                            ? <IconArrowBigRightLines/>
                            : <IconArrowBigLeftLines/>
                        }

                    </StyledThemeIcon>
                </div>
            </LeftContainer>
            <RightContainer theme={theme} className={classes.responsiveTextSize} isClose={isClose}>
                SAKARYA ACİL TIP
            </RightContainer>
        </TopMenuContainer>
    );
}

export default TopMenu