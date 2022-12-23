import React, {useEffect, useState} from "react";
import {useHotkeys, useLocalStorage} from "@mantine/hooks";
import {useAppSelector} from "./redux/hooks";
import {RootState} from "./redux/store";
import {
    ColorScheme,
    ColorSchemeProvider,
    MantineProvider,
    MantineTheme,
    createEmotionCache,
} from "@mantine/core";
import superjson from "superjson";
import CustomFonts from "./components/CustomFonts";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import App from "./App";
import rtlPlugin from "stylis-plugin-rtl";

const rtlCache = createEmotionCache({
    key: 'mantine-rtl',
    stylisPlugins: [rtlPlugin],
});

const MantineRoot: React.FC = () => {

    const [rtl, setRtl] = useLocalStorage<boolean>(
        {
            key: 'currentRtl',
            defaultValue: false,
        }
    );

    const [date, setDate] = useState(new Date());
    const isChecked = useAppSelector((state: RootState) => state.isChecked);

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(timer);
    });

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
            ? setCurrentColorToHours(date.getHours() >= 18 || date.getHours() < 6 ? "dark" : "light")
            : setCurrentColorFromLS(currentColorFromLS === "dark" ? "light" : "dark")
    }

    useHotkeys([['mod+J', () => !isChecked && toggleColorScheme()]]);
    useHotkeys([['mod+shift+L', () => setRtl((c) => !c)]]);



    const [top, setTop] = useState("0");
    let prevScrollpos = window.scrollY;
    window.onscroll = function () {
        let currentScrollPos = window.scrollY;
        if (prevScrollpos > currentScrollPos) {
            setTop("0");
        } else {
            setTop("-60px");
        }
        prevScrollpos = currentScrollPos;
    };

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
                            scrollPaddingTop: 100,
                        },
                        body: {
                            ...theme.fn.fontStyles(),
                            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[1],
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
                        xs: 450,
                        sm: 768,
                        md: 1000,
                        lg: 1450,
                        xl: 1700,
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
                <Router>
                    <Routes>
                        <Route path="/*" element={<App top={top} rtl={rtl} setRtl={setRtl}/>}/>
                    </Routes>
                </Router>
            </MantineProvider>
        </ColorSchemeProvider>
    )
}

export default MantineRoot