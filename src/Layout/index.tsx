import React from "react";
import {Outlet} from "react-router-dom";
import {Main, Container, Content} from "./styles";
import TopMenu from "../components/TopMenu";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Layout = ({
                    rtlChangeHandler,
                    rtl,
                    width,
                    height,
                    leftArrowClicked,
                    rightArrowClicked,
                    isClose,
                    isOpen,
                    top
                }) => {
    return (
        <React.Fragment>
            <Sidebar
                width={width}
                height={height}
                rtl={rtl}
                rtlChangeHandler={rtlChangeHandler}
                leftArrowClicked={leftArrowClicked}
                isOpen={isOpen}
            />
            <TopMenu top={top} rtl={rtl} isClose={isClose} rightArrowClicked={rightArrowClicked}/>
            <Container isClose={isClose} rtl={rtl} dir={rtl ? 'rtl' : 'ltr'}>
                <Main isClose={isClose}>
                    <Content>
                        <Outlet/>
                    </Content>
                </Main>
                <Footer/>
            </Container>
        </React.Fragment>
    )
}

export default Layout