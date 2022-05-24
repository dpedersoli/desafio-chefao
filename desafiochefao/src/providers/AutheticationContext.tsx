import { createContext, useState, useEffect, ReactElement } from "react";
import { JWT_TOKEN } from '../constants/index'

interface Provider {
  children: ReactElement
}

interface AuthContextProps {
  isAuthenticated: boolean,
  user: {
    name: string,
    email: string,
    password: string,
    isGoalSet: boolean,
  }
}

export const AuthContext = createContext({} as AuthContextProps)

export const AuthConsumer = AuthContext.Consumer

const AuthenticationProvider = ({ children }: Provider) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState({ name: "", email: "", password: "", isGoalSet: false })

  useEffect(() => {
    localStorage.setItem(JWT_TOKEN, '0000') //aqui o JWT que o Lucas/back me passar
    setUser({
      name: 'Daniel',
      email: 'daniel@dani.dan',
      password: '1234',
      isGoalSet: false
    })
  }, [])

  const context = {
    user,
    isAuthenticated
  }

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  )
}

export default AuthenticationProvider;