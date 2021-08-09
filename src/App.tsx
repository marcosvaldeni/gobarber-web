import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUn';

import AuthContext from './context/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthContext.Provider value={{ name: 'Diego' }}>
        <SignIn />
      </AuthContext.Provider>
      <GlobalStyle />
    </>
  );
};

export default App;
