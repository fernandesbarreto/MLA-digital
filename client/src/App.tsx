import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


import { Home } from './pages';
import { Component_apoio} from "./components/support"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Component_apoio/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
