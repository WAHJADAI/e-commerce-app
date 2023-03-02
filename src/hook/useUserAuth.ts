import React, { useState } from "react";
import { useLocalStorage } from "react-use";
import { useNavigate } from "react-router-dom";

import { onSignIn, onSignUp } from "api/authentication";
import useLoadingContext from "./useLoadingContext";
import { toast } from "react-toastify";
import useAuthenticationStore from "store/authentication/authentication.store";
import useProfileStore from "store/profile/profile.store";
import { shallow } from "zustand/shallow";

export type InformationFormType = {
  email: string;
  password: string;
};

function useUserAuth() {
  const [informationForm, setInformationForm] = useState<InformationFormType>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { onSetJwt, onRemoveJwt } = useAuthenticationStore();
  const { onUpdateUser, onRemoveUser } = useProfileStore(
    (state) => ({
      onUpdateUser: state.onUpdateUser,
      onRemoveUser: state.onRemoveUser,
    }),
    shallow,
  );
  const { isLoading, onLoading } = useLoadingContext();
  const [, setValue] = useLocalStorage("token");
  function onHandleChangeInformationForm(value: string, type: keyof InformationFormType) {
    setInformationForm((prev) => ({ ...prev, [type]: value }));
  }

  async function onSubmitSignUpForm(email: string, password: string) {
    //setValue(email);
    //onSetToken(email);
    //navigate(0);
    try {
      onLoading(true);
      const response = await onSignUp({ email, password });
      console.log("🚚", response);
      toast.success("Your welcome, Please verify your authentication email");
      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        toast.error("Sign Up Failed: Email or Username are already taken");
      }
    } finally {
      onLoading(false);
    }
  }

  async function onSubmitSignInForm(email: string, password: string) {
    // onLoading(true);
    // const response = await onSignIn({ email, password });
    // console.log("🚦", response);

    // if (response instanceof Error) {
    //   //alert(response.message);
    //   toast.error("Sign In Failed: Your user ID or password is incorrect");
    //   onLoading(false);
    // }
    // setValue(response?.data.jwt);
    // onSetToken(response?.data.jwt);
    // onLoading(false);
    // navigate(0);
    try {
      onLoading(true);
      const response = await onSignIn({ email, password });
      if (response?.data?.jwt) {
        console.log("😀", response.data.user);
        console.log("🥰", response.data);
        onSetJwt(response?.data?.jwt);
        response.data.user && onUpdateUser(response.data.user);
      }
      setValue(response?.data?.jwt);
    } catch (error) {
      if (error instanceof Error) {
        toast.error("Sign In Failed: Your user ID or password is incorrect");
        console.log(error.message);
      }
    } finally {
      onLoading(false);
    }
  }

  function onSignOut() {
    onRemoveUser();
    onRemoveJwt();
    navigate("/");
  }
  return {
    informationForm,
    setInformationForm,
    onSubmitSignUpForm,
    onSubmitSignInForm,
    onHandleChangeInformationForm,
    onSignOut,
  };
}

export default useUserAuth;
