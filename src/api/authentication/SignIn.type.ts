import { UserType } from "./Signup.type";

export interface SignInResponseType {
  jwt?: string;
  user?: Required<UserType>;
}
