"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import AppComponent from 'components/App';

const theme = createMuiTheme({
    typography: {
        fontFamily: '"Exo 2","Helvetica Neue",Arial,sans-serif',
    },
    palette: {
        primary: {main: '#6B71B8'},
        secondary: {main: '#F6F79D'},
    },
});

const App = () => (
    <div className="foobar">
        {/*<CssBaseline/>*//* MUI adds the reset at the end, which is not what we want*/}
        <MuiThemeProvider theme={theme}>
            <AppComponent/>
        </MuiThemeProvider>
    </div>
);

ReactDOM.render(
    <App/>,
    document.querySelector('#app')
);
