import styled from "@emotion/styled";
import {GRAY_100} from "../../colors";
import React from "react";

const MenuIcon = styled.div `
  color: ${GRAY_100};
  cursor:pointer;
  padding:15px;
`;


export default function RightArrow({arrow, ...props}) {

    return (
        <MenuIcon {...props}>
            {arrow} </MenuIcon>
    )
}
