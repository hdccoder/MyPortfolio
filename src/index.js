import React from 'react';
import ReactDOM from 'react-dom'; // Correct import statement
import { HashRouter, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import LandingPage from './Components/LandingPage';
import Home from './Home';

const defaultTheme = createTheme({
  palette: {
    mode: 'light',
    //Blushy Nudes
    primary: {
      main: '#f3dfd7',
      light: '#f5e5df',
      dark: '#66c4e1',
      contrastText: '#3d3d3d',
    },
    //cream
    secondary: {
      main: '#efe19f',
      light: '#f8f3dd',
      dark: '#eadb99',
    },
    //purple
    accentPurple: {
      dark: '#c999ff',
      main: '#d3adff',
      light: '#e9d6ff',
    },
    //pink
    accentPink: {
      dark: '#FE86AE',
      main: '#FEA0C0',
      light: '#FEC2D6',
      darkest: '#fd5d93'
    },
    //yellow
    accentYellow: {
      main: 'eeee73',
    },
    //Pale Nude Blush
    background: {
      default: '#faf2ef',
    },
    text: {
      primary: 'rgba(20,20,20,1)',
      secondary: 'rgba(40,40,42,0.7)',
    },
  },
  typography: {
    fontWeightLight: 200,
    fontFamily: 'Athelas',
    h1: {
      fontFamily: 'Athelasr',
      fontWeight: 800,
    },
    h2: {
      fontFamily: 'Athelasr',
      fontWeight: 800,
    },
    h3: {
      fontFamily: 'Athelasr',
      fontWeight: 800,
    },
    h4: {
      fontFamily: 'Athelasr',
      fontWeight: 800,
    },
    h5: {
      fontFamily: 'Athelasr',
      fontWeight: 800,
    },
    h6: {
      fontFamily: 'Athelasr',
      fontWeight: 800,
    },
    body1: {
      fontWeight: 550
    },
    body2: {
      fontWeight: 500
    }
  },
});

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
};

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
