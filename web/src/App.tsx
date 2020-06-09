import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyled from './styles/global';
import Routes from './routes';

import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <GlobalStyled />
    <AppProvider>
      <Router>
        <Routes />
      </Router>
    </AppProvider>
  </>
);

export default App;
