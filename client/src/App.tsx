import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { Feedback, Home } from './pages';
import { Contact } from './pages';
import { Products, Whatsapp, CardFeedback } from './components';
// import { Component_apoio} from "./components/support"

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Home/> */}
      <Feedback/>
      <Contact/>
      <Whatsapp/>
      <Home/>
      {/* <Component_apoio/> */}
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;