import {Global} from '@mantine/core';

const CustomFonts = () => {
    return (
        <Global
            styles={[
                {
                    '@font-face': {
                        fontFamily: 'Inter',
                        src: `url('/fonts/Inter/Inter-Light.ttf') format("truetype")`,
                        fontWeight: 300,
                        fontStyle: 'normal',
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Inter',
                        src: `url('/fonts/Inter/Inter-Regular.ttf') format("truetype")`,
                        fontWeight: 400,
                        fontStyle: 'normal',
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Inter',
                        src: `url('/fonts/Inter/Inter-Medium.ttf') format("truetype")`,
                        fontWeight: 500,
                        fontStyle: 'normal',
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Inter',
                        src: `url('/fonts/Inter/Inter-Bold.ttf') format("truetype")`,
                        fontWeight: 700,
                        fontStyle: 'normal',
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Inter',
                        src: `url('/fonts/Inter/Inter-Black.ttf') format("truetype")`,
                        fontWeight: 900,
                        fontStyle: 'normal',
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Andika',
                        src: `url('/fonts/Andika/Andika-Regular.ttf') format("truetype")`,
                        fontWeight: 400,
                        fontStyle: 'normal',
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Andika',
                        src: `url('/fonts/Andika/Andika-Bold.ttf') format("truetype")`,
                        fontWeight: 700,
                        fontStyle: 'normal',
                    },
                },
            ]}
        />
    );
}

export default CustomFonts