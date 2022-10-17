import { CssBaseline } from '@medly-components/core';
import { primaryTheme } from '@theme';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';

ReactDOM.render(
    <ThemeProvider theme={primaryTheme}>
        <>
            <CssBaseline />
            <App />
        </>
    </ThemeProvider>,
    document.getElementById('root')
);
