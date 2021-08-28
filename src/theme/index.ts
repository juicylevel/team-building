import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {},
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
                    backgroundColor: 'white',
                    '& #root': {
                        height: '100%',
                        minHeight: '100%',
                    },
                },
            },
        },
    },
});

export default theme;
