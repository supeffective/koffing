"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import {createMuiTheme, MuiThemeProvider} from 'material-ui/styles';
import AppComponent from 'components/App';

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Roboto,"Helvetica Neue",Arial,sans-serif',
    },
    palette: {
        primary: {main: '#1E447A'},
        secondary: {main: '#FDDA48'},
    },
});

const App = () => (
    <MuiThemeProvider theme={theme}>
        <AppComponent/>
    </MuiThemeProvider>
);

ReactDOM.render(
    <App/>,
    document.querySelector('#app')
);