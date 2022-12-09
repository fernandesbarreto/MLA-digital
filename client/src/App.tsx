import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { Contact, Home, HomePage, Navbar } from './pages';
import {Component_apoio} from "./components/Apoio"
import ProductsSection from './pages/products';
import SupportPage from './pages/secaoApoio';
import { Products, Whatsapp, CardFeedback } from './components';
import { ScrollDiv } from './pages/navbar/styles';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Whatsapp/>
      <ScrollDiv id = "home"/>
      <HomePage />
      <ProductsSection/>
      <ScrollDiv id = "contact"/>
      <Contact/>
      {/* <Component_apoio/> */}
      {/* <GlobalStyle/> */}
    </ThemeProvider>
  );
}

export default App;