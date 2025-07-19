import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle({
    ':root': {
        fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
        lineHeight: 1.5,
        fontWeight: 400,
        colorScheme: 'light dark',
        color: 'rgba(255, 255, 255, 0.87)',
        backgroundColor: 'rgb(36, 36, 36)',
        fontSynthesis: 'none',
        textRendering: 'optimizeLegibility',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
    },
    a :{
        fontWeight: 500,
        color: 'rgb(100, 108, 255)',
        textDecoration: 'inherit',
        ':hover': {
            color: 'rgb(83, 91, 242)',
        }
    },
    body: {
        margin: 0,
        display: 'flex',
        placeItems: 'center',
        minWidth: '320px',
        minHeight: '100vh',
    },
    '#root': {
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '2rem',
        textAlign: 'center',
        width: '100%',
    },
    h1: {
        fontSize: '3.2rem',
        lineHeight: 1.1,
    },
    button: {
        borderRadius: '8px',
        border: '1px solid transparent',
        padding: '0.6rem 1.2rem',
        fontSize: '1em',
        fontWeight: 500,
        fontFamily: 'inherit',
        backgroundColor: 'rgb(26, 26, 26)',
        cursor: 'pointer',
        transition: 'border-color 0.25s',
        ':hover': {
            borderColor: 'rgb(100, 108, 255)'
        },
        ':focus': {
            outline: '4px auto -webkit-focus-ring-color',
        },
        ':focus-visible': {
            outline: '4px auto -webkit-focus-ring-color',
        },
    },
    '@media (prefers-color-scheme: light)': {
        ':root': {
          color: 'rgb(33, 53, 71)',
          backgroundColor: 'rgb(255, 255, 255)',
        },
        'a:hover': {
          color: 'rgb(116, 123, 255)',
        },
        button: {
          backgroundColor: 'rgb(249, 249, 249)',
        }
      }
});
