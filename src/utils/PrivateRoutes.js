import React from 'react'
import { Outlet,Navigate } from 'react-router'

const useAuth =()=>{
    const user=localStorage.getItem('user');
    if(user){
        return true;
    }
    else{

        return false;
    }
    
}

const PrivateRoutes = (props:any) => {
    const auth=useAuth();
  return auth?  <Outlet /> :<Navigate to="/" />
}

export default PrivateRoutes