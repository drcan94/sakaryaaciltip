import styled from "@emotion/styled";
import {GRAY_300, YELLOW_500} from "../../colors";
import React from "react";
import {Link} from "react-router-dom";
import {MantineTheme, useMantineTheme} from "@mantine/core";

const LS: { Link } = {
    Link
};

LS.Link = styled(Link)<{theme: MantineTheme}>`
  display: block;
  margin-bottom: 6px;
  padding: 8px 12px;
  border-radius: 6px;
  color: ${GRAY_300};
  background-color: ${({theme}) => theme.colorScheme === "dark"
    ? theme.colors.dark[8]
    : theme.colors.blue[7]};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: ${YELLOW_500};
  }
`;

export default function SubMenu({children, ...props}) {
    const useTheme = useMantineTheme()
    return <LS.Link theme={useTheme} {...props}>{children}</LS.Link>;
}
