import clientApi from "config/axiosConfig";
import { InformationFormType } from "hook/useUserAuth";
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
  try {
    const response = await clientApi.post<SignUpResponseType, SignUpResponseType, SignUpParamType>(
      "/auth/local/register",
      {
        username: email,
        email,
        password,
      },
    );
    console.log("📦 response:", response);
  } catch (error) {
    if (error instanceof Error) {
      console.log("🚓 error:", error.message);
    }
  }
}

export async function onSignIn({ email, password }: InformationFormType) {
  try {
    const response = await clientApi.post<SignUpResponseType, SignUpResponseType, SignInParamType>(
      "/auth/local",
      {
        identifier: email,
        password,
      },
    );
    console.log("🚲 LonIn Id:", response);
  } catch (error) {
    if (error instanceof Error) {
      console.log("🏍 error :", error.message);
    }
  }
}
