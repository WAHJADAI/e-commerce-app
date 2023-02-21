import { SignUpResponseType } from "./Signup.type";

export interface SignInResponseType extends SignUpResponseType {
  jwt?: string;
}
