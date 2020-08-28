import React from 'react';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import AppWrapper from "./AppWrapper";

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
    <div className="koffing-app">
      {/*<CssBaseline/>*//* MUI adds the reset at the end, which is not what we want*/}
      <MuiThemeProvider theme={theme}>
        <AppWrapper/>
      </MuiThemeProvider>
    </div>
);

export default App;
