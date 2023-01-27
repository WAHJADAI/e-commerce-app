import React, { PropsWithChildren } from "react";
import { useLocalStorage } from "react-use";
import { Authentication } from "./AuthenticateContext";

type AuthenticationProviderPropsType = {};

export default function AuthenticationProvider({
  children,
}: PropsWithChildren<AuthenticationProviderPropsType>) {
  const [token] = useLocalStorage<string | undefined>("token");
  return <Authentication.Provider value={{ token: token }}>{children}</Authentication.Provider>;
}
