import React from 'react'

import { useAuth } from './hooks/useAuth';

import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({children}) => {
    let auth = useAuth()
    let location = useLocation();
    if (!auth.token){
        return <Navigate to="/login" state={{ from: location }} />;
    }
    return children
}

export default RequireAuth