import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const authToken = useSelector(state => state.auth.auths)
  return authToken ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
