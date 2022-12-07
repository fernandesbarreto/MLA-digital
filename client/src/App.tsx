import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { Products } from './components';

import { Home } from './pages';
import { Whatsapp } from './components';
import { Component_apoio} from "./components/support"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Whatsapp/>
      <Home/>
      <Component_apoio/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;