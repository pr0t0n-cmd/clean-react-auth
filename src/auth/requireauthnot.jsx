import React from 'react'

import { useAuth } from './hooks/useAuth';

import { Navigate } from 'react-router-dom';

const RequireAuthNot = ({children}) => {
    let auth = useAuth()
    if (auth.token){
        return <Navigate replace to="/" />;
    }
    return children
}

export default RequireAuthNot