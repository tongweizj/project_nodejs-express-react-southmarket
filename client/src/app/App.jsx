import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router';
import { createTheme, ThemeProvider } from '@mui/material';
import { typography } from '@mui/system';
import Nav from '@/components/Nav/Nav.jsx';
import Header from '@/components/Nav/Header'
import Footer from '@/components/Layout/Footer.jsx';
import './App.css'
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
          <Router>
            <Header />
            {/* <Nav /> */}
            <main className="container mx-auto px-4">
            <AppRouter />
            </main>
            <Footer />
          </Router>
    </ThemeProvider>
  );
};

export default App;