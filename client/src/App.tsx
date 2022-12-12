import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Contact, Home, HomePage, Navbar, Feedback } from './pages';
import {Component_apoio} from "./components/Apoio"
// import { Products } from './components';
// import { Home } from './pages';
import ProductsSection from './pages/products';
import { Products, Whatsapp, CardFeedback } from './components/';
import { Footer } from './components/footer';
import SupportPage from './pages/secaoApoio';
import { ScrollDiv } from './pages/navbar/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Whatsapp/>
      <ScrollDiv id = "home"/>
      <HomePage />
      <ProductsSection/>
      <Feedback/>
      <ScrollDiv id = "contact"/>
      <Contact/>
      <Footer></Footer>
      {/* <Component_apoio/> */}
      {/* <GlobalStyle/> */}
    </ThemeProvider>
  );
}

export default App;