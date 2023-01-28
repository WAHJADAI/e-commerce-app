import React, { PropsWithChildren } from "react";
import { useLocalStorage } from "react-use";
import { Authentication } from "./AuthenticateContext";

type AuthenticationProviderPropsType = {};

export default function AuthenticationProvider({
  children,
}: PropsWithChildren<AuthenticationProviderPropsType>) {
  const [token, setToken, removeToken] = useLocalStorage<string | undefined>("token");

  const onSetToken = (param: string) => {
    setToken(param);
  };

  const onDeleteToken = () => {
    removeToken();
  };
  return (
    <Authentication.Provider
      value={{ token: token, onSetToken: onSetToken, onDeleteToken: onDeleteToken }}
    >
      {children}
    </Authentication.Provider>
  );
}
