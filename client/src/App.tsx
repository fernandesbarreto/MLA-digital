import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import {Component_apoio} from "./components/Apoio"
import { Products } from './components';
import { Home } from './pages';

import { SectionAboutUs } from './pages/AboutUs';

import { Contact, Home, HomePage } from './pages';
import ProductsSection from './pages/products';
import { Products, Whatsapp, CardFeedback } from './components';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <SectionAboutUs/>
      <HomePage/>
      {/* <Contact/> */}
      {/* <Whatsapp/> */}
      {/* <Home/> */}
      <ProductsSection/>
      {/* <Component_apoio/> */}
      {/* <GlobalStyle/> */}
    </ThemeProvider>
  );
}

export default App;