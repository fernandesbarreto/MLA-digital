import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


import { Home } from './pages';
import { SectionAboutUs } from './pages/AboutUs';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SectionAboutUs/>
      {/* <GlobalStyle/> */}
    </ThemeProvider>
  );
}

export default App;
