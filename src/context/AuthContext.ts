import { createContext } from 'react';

interface AuthContextDate {
  name: string;
}

const AuthContext = createContext<AuthContextDate>({} as AuthContextDate);

export default AuthContext;
