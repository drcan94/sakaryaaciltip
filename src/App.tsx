import React, {useState} from "react";
import {Routes, Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Layout from "./Layout";
import {useMediaQuery, useViewportSize} from "@mantine/hooks";
import {useMantineTheme} from "@mantine/core";
import TeachingStaffScreen from "./screens/StaffScreen/TeachingStaff";
import SpecialistStaffScreen from "./screens/StaffScreen/SpecialistStaff";
import AssistantStaffScreen from "./screens/StaffScreen/AssisstantStaff";
import GraduatedStaffScreen from "./screens/StaffScreen/GraduatedStaff";
import VisionMissionScreen from "./screens/VisionMissionScreen";
import AboutScreen from "./screens/AboutScreen";
import {ContactScreen} from "./screens/ContactScreen";
import OnlineEducationalVideosScreen from "./screens/OnlineEducationalVideosScreen";
import ProtocolsGuidesScreen from "./screens/ProtocolsGuidesScreen";
import PreGraduatedScreen from "./screens/PreGraduatedScreen";
import NestedCategoriesScreen from "./screens/NestedCategoriesScreen";


const App: React.FC<{ rtl: any, setRtl: any, top:string }> = ({top, rtl, setRtl}) => {
    const {height, width} = useViewportSize();
    const theme = useMantineTheme()
    const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

    // sidebar is open
    const [isOpen, setIsOpen] = useState(true);
    // right arrow appearance
    const [isClose, setIsClose] = useState(true);

    const arrowClicked = () => {
        setIsOpen(!isOpen);
        setIsClose(!isClose);
    };

    const rtlChangeHandler = () => {
        setRtl((c) => !c);
        sm && arrowClicked();
    }

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Layout
                        rtlChangeHandler={rtlChangeHandler}
                        rtl={rtl}
                        leftArrowClicked={arrowClicked}
                        rightArrowClicked={arrowClicked}
                        width={width} height={height}
                        isOpen={isOpen} isClose={isClose}
                        top={top}
                    />
                }
            >
                <Route index
                       element={
                           <HomeScreen/>
                       }
                />
                <Route path={"egitmen-kadrosu"}
                       element={
                           <TeachingStaffScreen/>
                       }
                />
                <Route path={"uzmanlarimiz"}
                       element={
                           <SpecialistStaffScreen/>
                       }
                />
                <Route path={"asistanlarimiz"}
                       element={
                           <AssistantStaffScreen/>
                       }
                />
                <Route path={"mezunlarimiz"}
                       element={
                           <GraduatedStaffScreen/>
                       }
                />
                <Route path={"vizyon-misyon"}
                       element={
                           <VisionMissionScreen rtl={rtl}/>
                       }
                />
                <Route path={"hakkimizda"}
                       element={
                           <AboutScreen />
                       }
                />
                <Route path={"bize-ulasin"}
                       element={
                           <ContactScreen />
                       }
                />
                <Route path={"online-egitim-videolari"}
                       element={
                           <OnlineEducationalVideosScreen />
                       }
                />
                <Route path={"protokol-kilavuzlar"}
                       element={
                           <ProtocolsGuidesScreen />
                       }
                />
                <Route path={"mezuniyet-oncesi"}
                       element={
                           <PreGraduatedScreen />
                       }
                />
                <Route path={"nested-categories"}
                       element={
                           <NestedCategoriesScreen />
                       }
                />
                {/* Not Found */}
                <Route path={"*"} element={<div>Yapım Aşamasında!!</div>}/>
            </Route>
        </Routes>

    );
}

export default App;
