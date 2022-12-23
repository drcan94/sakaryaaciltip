import React from "react";
import {useElementSize} from "@mantine/hooks";
import {firstColon, secondColon, thirdColon} from "./data";
import {MantineTheme, useMantineTheme} from "@mantine/core";
import StaffAccordionComponent from "../../../components/StaffAccordion";
import CustomAccordion from "../../../components/CustomAccordion";

const AssistantStaffScreen: React.FC = () => {
    const {ref: containerRef, width: containerWidth} = useElementSize()
    const theme: MantineTheme = useMantineTheme();
    const title = "Asistanlarımız";

    return (
        <StaffAccordionComponent title={title} containerRef={containerRef} theme={theme}
            children={
                <React.Fragment>
                    <CustomAccordion container_width={containerWidth} data={firstColon}/>
                    <CustomAccordion container_width={containerWidth} data={secondColon}/>
                    <CustomAccordion container_width={containerWidth} data={thirdColon}/>
                </React.Fragment>
            }
        />
    )
}

export default AssistantStaffScreen




