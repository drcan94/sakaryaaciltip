import styled from "@emotion/styled";
import { GRAY_300, YELLOW_500 } from "../colors";
import React from "react";
import { Link } from "react-router-dom";

const LogoIcon = styled.div`
  display: block;
  color: ${GRAY_300};
  padding: 15px;
  &:hover {
    color: ${YELLOW_500};
  }
`;

type LogoTypes = {
    logo: JSX.Element,
    to: string
}

const Logo: React.FC<LogoTypes> = ({ logo, to }) => {
  return (
    <Link to={to}>
      <LogoIcon>{logo}</LogoIcon>
    </Link>
  );
}


export default Logo
