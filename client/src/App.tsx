import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';

import { Contact, Home } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Home/> */}
      <Contact/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
