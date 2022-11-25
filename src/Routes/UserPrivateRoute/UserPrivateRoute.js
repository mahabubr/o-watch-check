import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Loader from '../../Components/Loader/Loader';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const UserPrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext)


    const { data: userData, isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: () => fetch(`http://localhost:5000/user/?email=${user.email}`)
            .then(res => res.json())
    })

    if (isLoading) {
        return <Loader />
    }

    if (userData.role === "buyer") {
        return children
    }

    return <Navigate to='/dashboard' />

};

export default UserPrivateRoute;