import React, {useState} from "react";
import { ThemeProvider, makeStyles } from "@material-ui/core";
import Home from './Home'
import {createTheme} from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
  },
});

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: "#ff0000",
      },
      secondary: {
        main: "#0000ff",
      },
      background: {
        default: darkMode ? '#232323' : '#FFF',
        dark: darkMode ? '#181818' : '#f4f6f8',
        paper: darkMode ? '#232323' : '#FFF',
      }
    },
  });

  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  );
}

export default App;
