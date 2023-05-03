import React, { useContext } from 'react';
import { AuthContext } from '../components/providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location)
    
    if(loading){
        return <button type="button" class="bg-indigo-500 ..." disabled>
        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
          
        </svg>
        Processing...
      </button>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}}  replace></Navigate>;
};

export default PrivateRoute;