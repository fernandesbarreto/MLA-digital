import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


import { Home, HomePage } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Home/> */}
      <HomePage/>
      {/* <GlobalStyle/> */}
    </ThemeProvider>
  );
}

export default App;
