import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Feedback, Home, Navbar, HomePage,  Contact, ProductsSection, SectionAboutUs, SupportPage} from './pages';
import { Products, Whatsapp, CardFeedback } from './components';
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
      {/* <GlobalStyle/> */}
    </ThemeProvider>
  );
}

export default App;