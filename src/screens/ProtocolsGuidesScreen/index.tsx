import {ProtocolsGuidesScreenContainer} from "./styles";
import React, {useState} from "react";
import {Badge, MantineTheme, Paper, useMantineTheme} from '@mantine/core';
import {useMediaQuery} from "@mantine/hooks";
import {donem_4_data} from "../PreGraduatedScreen/data/donem_4_data";
import FileComponent from "../../components/FileComponent";

const ProtocolsGuidesScreen: React.FC = () => {

    const theme: MantineTheme = useMantineTheme();
    const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

    return (
        <ProtocolsGuidesScreenContainer>
            <div style={{maxWidth: 300, marginBottom: 20}}>
                <Badge variant="outline" size={sm ? "lg" : "xl"} radius={"sm"}
                       color={theme.colorScheme === "dark" ? "green" : "dark"} fullWidth>
                    Protokol ve Kılavuzlar
                </Badge>
            </div>


                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center"
                }}>
                    <FileComponent container_width={501} title={"NSTEMI"}
                                   url={"/assets/protocols_guides/esc_nstemi.pdf"}/>
                </div>
        </ProtocolsGuidesScreenContainer>
    )
}

export default ProtocolsGuidesScreen
