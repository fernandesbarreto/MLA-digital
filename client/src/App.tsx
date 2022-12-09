import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { Contact, Home, Navbar } from './pages';
import { Products, Whatsapp, CardFeedback } from './components';
import { ScrollDiv } from './pages/navbar/styles';
// import { Component_apoio} from "./components/support"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <ScrollDiv id = "contact"/>
      {/* <Contact/> */}
      {/* <Whatsapp/> */}
      {/* <Component_apoio/> */}
      {/* <GlobalStyle/> */}
    </ThemeProvider>
  );
}

export default App;