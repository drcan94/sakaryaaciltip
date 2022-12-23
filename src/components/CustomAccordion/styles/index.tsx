import styled from "@emotion/styled";
import {Accordion} from "@mantine/core";

export const StyledAccordion = styled(Accordion)<{ container_width: number }>`
  width: ${({
              container_width,
            }) => `${container_width / (container_width < 600 ? 1 : container_width < 900 ? 2 : 3) - 10}px`};
  max-width: ${({
                  container_width,
                }) => container_width < 500 ?`${container_width}px` : "500px"};;
  margin-bottom: 10px;
`;
