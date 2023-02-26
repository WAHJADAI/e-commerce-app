import React, { useContext, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import useAuthenticationStore from "store/authentication/authentication.store";

type PrivateRoutePropsType = {};

function PrivateRoute({}: PrivateRoutePropsType) {
  const jwtToken = useAuthenticationStore((state) => state.jwt);
  const navigate = useNavigate();
  useEffect(() => {
    if (!jwtToken) {
      navigate("/SignIn");
    }
  }, [jwtToken]);

  return jwtToken ? <Outlet /> : <Navigate to={"/SignIn"} />;
}

export default PrivateRoute;
