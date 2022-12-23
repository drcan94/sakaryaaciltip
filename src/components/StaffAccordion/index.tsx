import React from "react";
import {StaffContainer} from "./styles";
import {Badge, MantineTheme} from "@mantine/core";

type StaffAccordionTypes = {
    title: string,
    containerRef: any,
    theme: MantineTheme,
    children: JSX.Element
}

const StaffAccordionComponent: React.FC<StaffAccordionTypes> = (
    {title, containerRef, theme, children}
) => {
    return (
        <React.Fragment>
            <div style={{maxWidth: 300}}>
                <Badge variant="outline" size={"xl"} radius={"sm"}
                       color={theme.colorScheme === "dark" ? "green" : "dark"} fullWidth>
                    {title}
                </Badge>
            </div>
            <StaffContainer ref={containerRef}>
                {children}
            </StaffContainer>
        </React.Fragment>
    )
}

export default StaffAccordionComponent




