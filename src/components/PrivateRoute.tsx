import { Authentication } from "context/auth";
import React, { useContext, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

type PrivateRoutePropsType = {};

function PrivateRoute({}: PrivateRoutePropsType) {
  const { token } = useContext(Authentication);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/SignIn");
    }
  }, [token]);

  return token ? <Outlet /> : <Navigate to={"/SignIn"} />;
}

export default PrivateRoute;
