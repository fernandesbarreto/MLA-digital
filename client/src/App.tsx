import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


import { Home } from './pages';
import { Whatsapp } from './components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Whatsapp/>
      <Home/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
