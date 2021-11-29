import React from 'react'
import { useState, createContext, useEffect } from 'react';

import { authHelpers } from '../auth/auth';

export let AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

  let [token, setToken] = useState(null);
  
  useEffect(() => {
    if(authHelpers.getToken()){
      setToken(authHelpers.getToken())
    }
  }, [])

  let signin = async (data) => {
    try{
      let result = await authHelpers.signin(data)
      result ? setToken(result) : setToken(null)
    } catch (e){
      console.log(e)
      setToken(null)
    }
  };

  let signout = () => {
    authHelpers.removeToken()
    setToken(null);
  };

  let value = { token, setToken, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider
