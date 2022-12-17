import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Contact, HomePage, Navbar, Feedback, SectionAboutUs } from './pages';
import ProductsSection from './pages/products';
import { Whatsapp} from './components/';
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
      <ScrollDiv id = "about"/>
      <SectionAboutUs/>
      <ScrollDiv id = "products"/>
      <ProductsSection/>
      <ScrollDiv id = "feedbacks"/>
      <Feedback/>
      <ScrollDiv id = "support"/>
      <SupportPage/>
      <ScrollDiv id = "contacts"/>
      <Contact/>
      <Footer></Footer>
      {/* <Component_apoio/> */}
      {/* <GlobalStyle/> */}
    </ThemeProvider>
  );
}

export default App;