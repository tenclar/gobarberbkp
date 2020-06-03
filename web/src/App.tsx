import React from 'react';
import GlobalStyled from './styles/global';
import SignIn from './pages/Signin';
// import SignUp from './pages/SignUp';

import AuthContext from './context/AuthContext';

const App: React.FC = () => (
  <>
    <GlobalStyled />
    <AuthContext.Provider value={{ name: 'Tenclar' }}>
      <SignIn />
    </AuthContext.Provider>
  </>
);

export default App;
