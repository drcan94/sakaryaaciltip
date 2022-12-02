import styled from "@emotion/styled";
import {Link} from "react-router-dom";


export const HeaderContainer = styled.div<{ top: any }>`
  position: fixed;
  top: ${({top}) => top};
  left: 0;
  width: 100%;
  height: 30px;
  background: #704CB6FF;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transition: 0.4s all;
  font-family: sans-serif;
  font-weight: bold;
  letter-spacing: 2px;
`;


export const NavbarLink = styled(Link)`
  color: white;
  font-size: .9rem;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;

  &:hover,
  &:active {
    color: #f3e993;
  }

`;