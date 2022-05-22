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
    password: string
  }
}

export const AuthContext = createContext({} as AuthContextProps)

export const AuthConsumer = AuthContext.Consumer

const AuthenticationProvider = ({ children }: Provider) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState({ name: "", email: "", password: "" })

  useEffect(() => {
    localStorage.setItem(JWT_TOKEN, '8520') //aqui o JWT que o Lucas/back me passar
    setUser({
      name: 'Daniel',
      email: 'daniel@daniel.daniel',
      password: '1235'
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