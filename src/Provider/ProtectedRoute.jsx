import React, { useContext } from 'react';
import { AuthContext } from './Authprovider';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProtectedRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    let location = useLocation();

    if(loading)
    {
        return <button className="btn loading">loading</button>
    }
    if(!user)
    {
        toast("You Need Login First")
    }

    if(user)
    {
        return children;
    }
    return <Navigate to="/login"  state={{from :location}} replace></Navigate>
};

export default ProtectedRoute;