import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, Route, useLocation } from 'react-router-dom';
import Products from '../HomePages/Products/Products';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({children, ...rest})=>{
    const {user, isloading} = useAuth();
    let location = useLocation();
    if(isloading){
        return <Spinner animation='border' variant='danger'></Spinner>
    }
    if(user.email){
        return children;
    }
    return <Navigate to='/login' state={{from:location}}/>
};

export default PrivateRoute;