import React from 'react';
import { ThemeProvider } from 'styled-components';
import { base } from './themes';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IProps {}

const App: React.FC<IProps> = () => {
  const theme = { ...base };
  return (
    <ThemeProvider theme={theme}>
      <div> holder until component ready</div>
    </ThemeProvider>
  );
};

export default App;
