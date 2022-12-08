import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { Contact, Home } from './pages';
import ProductsSection from './pages/products';
import { Products, Whatsapp } from './components';
// import { Component_apoio} from "./components/support";

function App() {
  return (
    <ThemeProvider theme={theme}>
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