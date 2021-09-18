import { createTheme } from '@material-ui/core/styles';
import { baseColor, brandColor } from './variables';

const theme = createTheme({
    palette: {
        primary: {
            main: brandColor,
        },
        action: {
            focus: '#00FF00',
        },
        text: {
            primary: baseColor,
        },
    },
    typography: {
        fontFamily: 'Rubik, sans-serif',
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                html: {
                    height: '100%',
                    textRendering: 'optimizeLegibility',
                    WebkitFontSmoothing: 'antialiased',
                },
                body: {
                    height: '100%',
                    backgroundColor: '#333',
                    '& #root': {
                        height: '100%',
                        minHeight: '100%',
                    },
                },
            },
        },
        MuiLink: {
            root: {
                cursor: 'pointer',
                '&.MuiTypography-colorPrimary': {
                    color: brandColor,
                },
            },
        },
    },
});

export default theme;
