import React from 'react';
import ReactDOM from 'react-dom'; // Correct import statement
import { HashRouter, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import LandingPage from './Components/LandingPage';
import Home from './Home';

const defaultTheme = createTheme({
  // Your theme configuration...
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
