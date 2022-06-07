import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { base } from './themes';
import Search from './pages/Search';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IProps {}

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #1a1a1a;
    font-family: BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
    margin: 0;
    padding: 0;
  }
`;

const App: React.FC<IProps> = () => {
  const theme = { ...base };
  return (
    <ThemeProvider theme={theme}>
        <Search />
        <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
