import React, {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import {Main, Container, Content} from "./styles";
import TopMenu from "../components/TopMenu";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Layout = ({rtlChangeHandler,rtl,width, height, leftArrowClicked, isOpen, isClose, rightArrowClicked}) => {

    const isLeftArrowClicked = () => leftArrowClicked()
    const isRightArrowClicked = () => rightArrowClicked()

    return (
        <React.Fragment>
            <Sidebar
                width={width}
                height={height}
                rtl={rtl}
                rtlChangeHandler={rtlChangeHandler}
                leftArrowClicked={isLeftArrowClicked}
                isOpen={isOpen}
            />
            <TopMenu rtl={rtl} isClose={isClose} rightArrowClicked={isRightArrowClicked}/>
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