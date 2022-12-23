import styled from "@emotion/styled";
import {Container} from "@mantine/core";

export const NavContainer = styled(Container)<{container_width:number}>`
  display: ${({container_width}) => container_width < 720 && "none"};
  position: sticky;
  position: -webkit-sticky; /* For Safari */
  top: 80px; 
  max-height: 400px;
  min-width: 200px;
  margin: 0 10px;
  padding: 0 10px;
  overflow: auto;
`;

