import React, {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Layout from "./Layout";
import {useHotkeys, useLocalStorage, useViewportSize} from "@mantine/hooks";
import {
    ColorScheme,
    MantineTheme,
    useMantineTheme,
    ColorSchemeProvider,
    MantineProvider,
    createEmotionCache
} from "@mantine/core";
import CustomFonts from "./components/CustomFonts";
import {useAppSelector} from "./redux/hooks";
import {RootState} from "./redux/store";
import superjson from "superjson";
import rtlPlugin from "stylis-plugin-rtl";

const rtlCache = createEmotionCache({
    key: 'mantine-rtl',
    stylisPlugins: [rtlPlugin],
});

const App: React.FC = () => {

    const [date, setDate] = useState(new Date());
    const isChecked = useAppSelector((state: RootState) => state.isChecked);

    const defaultCurrentColorToHours: ColorScheme = (date.getHours() >= 18 || date.getHours() < 6 ? "dark" : "light")
    const [currentColorToHours, setCurrentColorToHours] = useState<ColorScheme>(defaultCurrentColorToHours)

    const isExistCurrentColorOnLS = localStorage.getItem("currentColor")
    const defaultCurrentColorFromLS: ColorScheme = isExistCurrentColorOnLS ? JSON.parse(isExistCurrentColorOnLS)["json"] : "light"

    const [currentColorFromLS, setCurrentColorFromLS] = useLocalStorage<ColorScheme>({
        key: 'currentColor',
        defaultValue: defaultCurrentColorFromLS,
        serialize: superjson.stringify,
        deserialize: (str) => (str === undefined ? defaultCurrentColorFromLS : superjson.parse(str)),
        getInitialValueInEffect: true
    });

    const toggleColorScheme = () => {
        isChecked
            ? setCurrentColorToHours(defaultCurrentColorToHours)
            : setCurrentColorFromLS(currentColorFromLS === "dark" ? "light" : "dark")
    }

    useHotkeys([['mod+J', () => !isChecked && toggleColorScheme()]]);

    const [rtl, setRtl] = useLocalStorage<boolean>(
        {
            key: 'currentRtl',
            defaultValue: false,
        }
    );
    const rtlChangeHandler = () => setRtl((c) => !c)
    useHotkeys([['mod+shift+L', rtlChangeHandler]]);


    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(timer);
    });
    // sidebar is open
    const [isOpen, setIsOpen] = useState(true);

    // right arrow appearance
    const [isClose, setIsClose] = useState(true);

    const arrowClicked = () => {
        setIsOpen(!isOpen);
        setIsClose(!isClose);
    };
    const theme = useMantineTheme()

    const {height, width} = useViewportSize();
    console.log(width)
    return (
        <ColorSchemeProvider colorScheme={isChecked ? currentColorToHours : currentColorFromLS}
                             toggleColorScheme={toggleColorScheme}>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                // emotionCache={rtlCache}
                emotionCache={rtl ? rtlCache : undefined}
                theme={{
                    dir: rtl ? 'rtl' : 'ltr',
                    colorScheme: isChecked ? currentColorToHours : currentColorFromLS,
                    // Override any other properties from default theme
                    globalStyles: (theme: MantineTheme) => ({
                        '*, *::before, *::after': {
                            boxSizing: 'border-box',
                            margin: 0,
                            padding: 0,
                            outline: 0,
                            textDecoration: "none",
                            listStyle: "none",
                        },
                        body: {
                            ...theme.fn.fontStyles(),
                            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white,
                            color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
                            lineHeight: theme.lineHeight,
                        },

                    }),
                    fontFamily: "Inter, sans-serif",
                    fontFamilyMonospace: 'Monaco, Courier, monospace',
                    spacing: {xs: 15, sm: 20, md: 25, lg: 30, xl: 40},
                    colors: {
                        // override dark colors to change them for all components
                        dark: [
                            '#d5d7e0',
                            '#acaebf',
                            '#8c8fa3',
                            '#666980',
                            '#4d4f66',
                            '#34354a',
                            '#2b2c3d',
                            '#1d1e30',
                            '#0c0d21',
                            '#01010a',
                        ],
                    },
                    breakpoints: {
                        xs: 500,
                        sm: 768,
                        md: 1000,
                        lg: 1275,
                        xl: 1600,
                    },
                    fontSizes: {
                        xs: 10,
                        sm: 12,
                        md: 14,
                        lg: 16,
                        xl: 20,
                    },
                    headings: {
                        fontWeight: 400,
                        fontFamily: 'Inter, sans serif',
                    },
                }}
            >
                <CustomFonts/>
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
                            />
                        }
                    >
                        <Route index
                               element={
                                   <HomeScreen
                                       isOpen={isOpen}
                                       width={
                                           theme.fn.smallerThan("sm")
                                               ? (!isOpen ? width - 220 : width)
                                               : (isOpen ? width - 220 : width)
                                       }
                                   />
                               }
                        />
                        {/* Not Found */}
                        <Route path={"*"} element={<div>Yapım Aşamasında!!</div>}/>
                    </Route>
                </Routes>
            </MantineProvider>
        </ColorSchemeProvider>
    );
}

export default App;
