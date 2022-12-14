import styled from "@emotion/styled";
import TopSideBar from "./TopSideBar";
import {YELLOW_700} from "../colors";
import SidebarMenu from "./SidebarMenu";
import MenuGroup from "./MenuGroup";
import React, {useCallback, useEffect, useRef} from "react";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {RootState} from "../../redux/store";
import {MantineTheme, useMantineTheme, Center, Checkbox, Box} from "@mantine/core";
import SwitchThemeButton from "../ToggleThemeIcon";
import {getIsChecked} from "../../redux/actions/themeAction";
import SubMenu from "./SubMenu";
import DirectionChangeIcon from "../DirectionChangeIcon";

const sideBarWidth = `220px`;

const Container = styled.div<{ rtl: any, theme: MantineTheme, isOpen: boolean, screenWidth: number, screenHeight: number }>`
  position: fixed;
  top: 0;
  left: ${({isOpen, rtl}) => !rtl ? (isOpen ? `0` : `-${sideBarWidth}`) : "unset"};
  right: ${({isOpen, rtl}) => rtl ? (isOpen ? `0` : `-${sideBarWidth}`) : "unset"};
  width: ${sideBarWidth};
  height: ${({screenHeight}) => `${screenHeight}px`};
  display: flex;
  background: ${({theme}) => theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.blue[9]
  };
  color: white;
  transition: 0.3s all;
  z-index: 999999000000000;
  border-right: ${({
                     theme,
                     rtl,
                     screenWidth
                   }) => !rtl && screenWidth > theme.breakpoints.xs ? (theme.colorScheme === "dark" ? `2.5px solid ${theme.colors.yellow[6]}` : `2.5px solid ${theme.colors.dark[7]}`) : "none"};
  border-left: ${({
                    theme,
                    rtl,
                    screenWidth
                  }) => rtl && screenWidth > theme.breakpoints.xs ? (theme.colorScheme === "dark" ? `2.5px solid ${theme.colors.yellow[6]}` : `2.5px solid ${theme.colors.dark[7]}`) : "none"};

  @media (max-width: 768px) {
    left: ${({isOpen, rtl}) => !rtl ? (isOpen ? `-${sideBarWidth}` : `0`) : "unset"};
    right: ${({isOpen, rtl}) => rtl ? (isOpen ? `-${sideBarWidth}` : `0`) : "unset"};
  }

  @media (max-width: 450px) {
    width: ${({screenWidth}) => `${screenWidth}px`};
    left: ${({isOpen, screenWidth, rtl}) => !rtl ? (isOpen ? `-${screenWidth}px` : `0`) : "unset"};
    right: ${({isOpen, screenWidth, rtl}) => rtl ? (isOpen ? `-${screenWidth}px` : `0`) : "unset"};
  }
`;

const SidebarMenus = styled.div<{ screenWidth: number, screenHeight: number }>`
  width: ${sideBarWidth};
  padding: 16px;
  position: fixed;
  top: 60px;
  overflow: auto;
  height: ${({screenHeight}) => `calc(${screenHeight}px - 60px`});
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 450px) {
    width: ${({screenWidth}) => `${screenWidth}px`};
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${YELLOW_700};
    border-radius: 5px;
  }
`;

const UpGroup = styled.div`
`
const DownGroup = styled.div``

const Sidebar = ({height, width, isOpen, leftArrowClicked, rtl, ...props}) => {
    const dispatch = useAppDispatch();

    // const setDimension = () => dispatch(get_screen_width());
    // const isClicked = () => leftArrowClicked();
    const isClicked = useCallback(() => leftArrowClicked(), [leftArrowClicked]);
    const containerRef = useRef<HTMLDivElement>(null);

    const arrowClickHandler = () => (width <= 768) && !isOpen && isClicked()

    const isChecked = useAppSelector((state: RootState) => state.isChecked);


    useEffect(() => {

        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                if (width <= 768) {
                    !isOpen && isClicked();
                }
            }
        };
        document.addEventListener("click", handleClickOutside, true);

        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, [isOpen, width, isClicked]);
    const useTheme = useMantineTheme()

    return (
        <Container dir={rtl ? 'rtl' : 'ltr'} rtl={rtl} theme={useTheme} screenHeight={height} screenWidth={width}
                   ref={containerRef} isOpen={isOpen} {...props}>
            <TopSideBar
                screenWidth={width}
                sideBarWidth={sideBarWidth}
                leftArrowClicked={isClicked}
                isOpen={isOpen}
                rtl={rtl}
            />
            <SidebarMenus screenHeight={height} screenWidth={width}>
                <UpGroup>
                    <Link to="/" onClick={arrowClickHandler}>
                        <SidebarMenu
                            title="Anasayfa"
                            // icon={<DashboardIcon/>}
                            count={0}
                        />
                    </Link>

                    <MenuGroup title="????erikler">
                        <Link to="/galeri" onClick={arrowClickHandler}>
                            <SidebarMenu title="Galeri"/>
                        </Link>

                        <SidebarMenu title="D??k??manlar">
                            <SubMenu to="/mezuniyet-oncesi" onClick={arrowClickHandler}>Mezuniyet ??ncesi</SubMenu>
                            <SubMenu to="/asistan-dersleri" onClick={arrowClickHandler}>Asistan Dersleri</SubMenu>
                            <SubMenu to="/protokol-kilavuzlar" onClick={arrowClickHandler}>Protokol ve K??lavuzlar</SubMenu>
                            <SubMenu to="/online-egitim-videolari" onClick={arrowClickHandler}>Online E??itim Videolar??</SubMenu>
                            <SubMenu to="/makaleler" onClick={arrowClickHandler}>Makaleler</SubMenu>
                            <SubMenu to="/akil-kartlari" onClick={arrowClickHandler}>Ak??l Kartlar??</SubMenu>
                        </SidebarMenu>
                    </MenuGroup>


                    <MenuGroup title="Bize Dair">
                        <Link to="/hakkimizda" onClick={arrowClickHandler}>
                            <SidebarMenu
                                title="Hakk??m??zda"
                                active={false}
                            />
                        </Link>
                        <Link to="/vizyon-misyon" onClick={arrowClickHandler}>
                            <SidebarMenu
                                title="Vizyon & Misyon"
                                active={false}
                            />
                        </Link>
                        <SidebarMenu title="Akademik Kadro" count={0}>
                            <SubMenu to="/egitmen-kadrosu" onClick={arrowClickHandler}>E??itmen Kadrosu</SubMenu>
                            <SubMenu to="/uzmanlarimiz" onClick={arrowClickHandler}>Uzmanlar??m??z</SubMenu>
                            <SubMenu to="/asistanlarimiz" onClick={arrowClickHandler}>Asistanlar??m??z</SubMenu>
                            <SubMenu to="/mezunlarimiz" onClick={arrowClickHandler}>Mezunlar??m??z</SubMenu>
                        </SidebarMenu>
                        <Link to="/bize-ulasin" onClick={arrowClickHandler}>
                            <SidebarMenu
                                title="Bize Ula????n"
                                active={false}
                            />
                        </Link>

                    </MenuGroup>
                </UpGroup>
                <DownGroup>
                    <MenuGroup title="Tema">
                        <Center>
                            <Checkbox
                                size={"sm"} color={"lime"}
                                checked={isChecked}
                                styles={(theme, params) => ({
                                    label: {
                                        paddingLeft: 5
                                    }
                                })}
                                label={
                                    <Box sx={(theme: MantineTheme) => ({
                                        color: theme.colorScheme === "dark" ? theme.colors.yellow[3] : theme.colors.gray[0],
                                    })}>
                                        G??ne??e Endeksli
                                    </Box>
                                }
                                onChange={() => dispatch(getIsChecked())}
                            />
                        </Center>

                        {!isChecked && <SwitchThemeButton disabled={isChecked}/>}

                    </MenuGroup>

                    <MenuGroup title="Y??n">

                        <DirectionChangeIcon rtl={rtl} changeHandler={props.rtlChangeHandler}/>

                    </MenuGroup>
                </DownGroup>
            </SidebarMenus>


        </Container>
    );
}


export default Sidebar