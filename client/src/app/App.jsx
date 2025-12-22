import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router';
import { createTheme, ThemeProvider } from '@mui/material';
import { typography } from '@mui/system';
import Nav from '/src/components/Nav/Nav.jsx';
import Footer from '/src/components/Footer/Footer.jsx';
const theme = createTheme({
  typography: {
    fontFamily: [
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif"
    ].join(",")
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='layout'>
        <div className='content'>
          <Router>
            <Nav />
            <AppRouter />
            <Footer />
          </Router>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;