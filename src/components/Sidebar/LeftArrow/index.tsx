import styled from "@emotion/styled";
import {GRAY_100} from "../../colors";
import React from "react";


const MenuIcon = styled.div `
  color: ${GRAY_100};
  cursor:pointer;
 
`;


export default function LeftArrow({arrow}) {
    return (
        <MenuIcon>{arrow}</MenuIcon>
    )
}

