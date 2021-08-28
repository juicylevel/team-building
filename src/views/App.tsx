import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import theme from 'theme';
import Main from './Main';

const App = () => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    </ThemeProvider>
);

export default App;
