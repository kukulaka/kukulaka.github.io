import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { base } from './themes';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IProps {}

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #1a1a1a;
    font-family: BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
  }
`


const App: React.FC<IProps> = () => {
  const theme = { ...base };
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
       <GlobalStyle/>
      <div> holder until component ready</div>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default App;
