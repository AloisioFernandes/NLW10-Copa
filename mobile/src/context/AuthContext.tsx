import { createContext } from "react";

interface UserProps {
  name: string;
  avatarUrl: string;
}

export interface AuthContextDataProps {
  user: UserProps;
  signIn: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextDataProps)

export function AuthContextProvider({ children }){
  async function signIn(){

  }

  return (
    <AuthContext.Provider value={{
      signIn,
      user: {
        name: 'Aloísio',
        avatarUrl: 'https://github.com/AloisioFernandes.png'
      }
    }}>
      {children}
    </AuthContext.Provider>
  )
}