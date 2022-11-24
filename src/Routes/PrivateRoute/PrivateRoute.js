import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { SpinnerInfinity } from 'spinners-react';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    const location = useLocation()

    if (loading) {
        return <SpinnerInfinity className='h-screen w-screen mx-auto flex justify-center items-center' />
    }

    if (user) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivateRoute;