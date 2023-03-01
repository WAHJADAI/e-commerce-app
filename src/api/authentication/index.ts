import { AxiosResponse } from "axios";
import clientApi from "config/axiosConfig";

import { InformationFormType } from "hook/useUserAuth";
import { SignInResponseType } from "./SignIn.type";
import { SignUpResponseType } from "./Signup.type";

export interface SignUpParamType {
  username?: string;
  email?: string;
  password?: string;
}
export interface SignInParamType {
  identifier?: string;
  password?: string;
}

export async function onSignUp({ email, password }: InformationFormType) {
  const response = await clientApi.post<
    SignUpResponseType,
    AxiosResponse<SignUpResponseType>,
    SignUpParamType
  >("/auth/local/register", {
    username: email,
    email,
    password,
  });
  console.log("📦 response:", response);
  return response;
}

export async function onSignIn({ email, password }: InformationFormType) {
  // try {
  //   const response = await clientApi.post<
  //     SignInResponseType,
  //     AxiosResponse<SignInResponseType>,
  //     SignInParamType
  //   >("/auth/local", {
  //     identifier: email,
  //     password,
  //   });
  //   console.log("🚇", response);
  //   return response;
  // } catch (error) {
  //   if (error instanceof Error) {
  //     console.log("🚓 error:", error.message);
  //     return error;
  //   }
  // }
  const response = await clientApi.post<
    SignInResponseType,
    AxiosResponse<SignInResponseType>,
    SignInParamType
  >("/auth/local", {
    identifier: email,
    password,
  });

  return response;
}
