import React, {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Layout from "./Layout";
import {useMediaQuery, useViewportSize} from "@mantine/hooks";
import {useMantineTheme} from "@mantine/core";


const App: React.FC<{ rtl: any, setRtl: any }> = ({rtl, setRtl}) => {
    const {height, width} = useViewportSize();
    const theme = useMantineTheme()
    const xs = useMediaQuery(`(max-width: ${theme.breakpoints.xs}px)`);
    const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

    // sidebar is open
    const [isOpen, setIsOpen] = useState(true);
    // right arrow appearance
    const [isClose, setIsClose] = useState(true);

    const arrowClicked = () => {
        setIsOpen(!isOpen);
        setIsClose(!isClose);
    };

    const rtlChangeHandler = () => {
        setRtl((c) => !c);
        sm && arrowClicked();
    }

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Layout
                        rtlChangeHandler={rtlChangeHandler}
                        rtl={rtl}
                        leftArrowClicked={arrowClicked}
                        rightArrowClicked={arrowClicked}
                        width={width} height={height}
                        isOpen={isOpen} isClose={isClose}
                    />
                }
            >
                <Route index
                       element={
                           <HomeScreen
                               isOpen={isOpen}
                               height={height}
                               width={
                                   xs ? (!isOpen ? 0 : width)
                                       : sm ? (!isOpen ? width - 220 : width)
                                           : (isOpen ? width - 220 : width)
                               }
                           />
                       }
                />
                {/* Not Found */}
                <Route path={"*"} element={<div>Yapım Aşamasında!!</div>}/>
            </Route>
        </Routes>

    );
}

export default App;
