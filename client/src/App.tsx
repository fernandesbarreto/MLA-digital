import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import {Component_apoio} from "./components/Apoio"
import { Products } from './components';
import { Home } from './pages';
import { Contact, Home } from './pages';
import { Products, Whatsapp, CardFeedback } from './components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Contact/>
      <Whatsapp/>
      <Home/>
      <Component_apoio/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;