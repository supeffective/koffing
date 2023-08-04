import React from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import App from './App'

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Exo 2","Helvetica Neue",Arial,sans-serif',
  },
  palette: {
    primary: { main: '#6B71B8' },
    secondary: { main: '#F6F79D' },
  },
})

const ThemedApp = () => (
  <div className="koffing-app-container">
    {/*<CssBaseline/>*/
    /* MUI adds the reset at the end, which is not what we want*/}
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </div>
)

export default ThemedApp
