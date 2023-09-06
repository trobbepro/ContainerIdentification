const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.razor", "./**/*.cshtml", "./**/*.css"],
    theme: {
        screens: {
            sm: "768px",
            md: "1024px",
            lg: "1360px",
            xl: "1440px",
            xxl: "1600px",
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
            },
            screens: {
                DEFAULT: 'none',
                sm: '680px',
                md: '936px',
                lg: '1128px',
                xl: '1128px',
                '2xl': '1312px',
            },
        },
        colors: {
            primary: {
                lightest: "#F9F7FD",
                lighter: "#F2F2FD",
                light: "#DBE2FD",
                DEFAULT: "#8C4AF7",
                dark: "#48219C",
                darker: "#2B145C",
            },
            secondary: {
                lighter: "#DCFFFF",
                light: "#BFF1F2",
                DEFAULT: "#40F4E9",
                dark: "#1FCBCB",
            },
            neutral: {
                0: "#FFFFFF",
                50: "#F6F7F8",
                100: "#D9DADE",
                300: "#BBC1D1",
                500: "#8892A9",
                600: "#7582A3",
                700: "#4E5974",
                900: "#191B1F",
            },
            success: {
                light: "#ECF9F0",
                DEFAULT: "#12973B",
                dark: "#175129",
            },
            warning: {
                light: "#FFEACB",
                DEFAULT: "#FFAF37",
                dark: "#FF9212",
            },
            danger: {
                light: "#FDF2F1",
                DEFAULT: "#B21D15",
                dark: "#650707",
            },
        },
        spacing: {
            0.25: "0.125rem", // 2px en rem
            0.5: "0.25rem", // 4px en rem
            0.75: "0.375rem", // 6px en rem
            1: "0.5rem", // 8px en rem
            1.5: "0.75rem", // 12px en rem
            2: "1rem", // 16px en rem
            2.5: "1.25rem", // 20px en rem
            3: "1.5rem", // 24px en rem
            4: "2rem", // 32px en rem
            5: "2.5rem", // 40px en rem
            6: "3rem", // 48px en rem
            7: "3.5rem", // 56px en rem
            8: "4rem", // 64px en rem
            9: "4.5rem", // 72px en rem
            10: "5rem", // 80px en rem
            11: "5.5rem", // 88px en rem
            12: "6rem", // 96px en rem
            13: "6.5rem", //104px en rem
        },
        borderRadius: {
            xs: "0.25rem",
            s: "0.5rem",
            m: "1rem",
            l: "1.5rem",
            xl: "8rem",
        },
        fontSize: {
            sm: '0.8rem',
            base: '1rem',
            xl: '1.25rem',
            '2xl': '1.563rem',
            '3xl': '1.953rem',
            '4xl': '2.441rem',
            '5xl': '3.052rem',
        },
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
};
