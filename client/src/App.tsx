import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import {Component_apoio} from "./components/Apoio"
import { Products } from './components';
import { Home } from './pages';
import SupportPage from './pages/secaoApoio';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <SupportPage/>
    </ThemeProvider>
  );
}

export default App;