import styled from "@emotion/styled";
import {Container} from "@mantine/core";
import {Accordion} from "@mantine/core";

export const VisionMissionScreenContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: stretch;
  padding-top: 20px;
  min-width: 100%;
`;


const StyledBaseAccordion = styled(Accordion)<{ container_width: number }>`
  width: ${({
              container_width,
            }) => `${container_width / (container_width < 600 ? 1 : container_width < 900 ? 2 : 3) - 10}px`};
  max-width: ${({
                  container_width,
                }) => container_width < 500 ? `${container_width}px` : "500px"};;
  margin-bottom: 10px;
`;


export const StyledVisionAccordion = styled(StyledBaseAccordion)``
export const StyledMissionAccordion = styled(StyledBaseAccordion)``
export const StyledValuesAccordion = styled(StyledBaseAccordion)``