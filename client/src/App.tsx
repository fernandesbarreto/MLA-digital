import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { Feedback, Home } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Home/> */}
      <Feedback/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
