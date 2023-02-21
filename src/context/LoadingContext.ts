import React, { createContext } from "react";

export type LoadingContext = {
  isLoading: boolean;
  onLoading: (param: boolean) => void;
};

export const Loading = createContext<LoadingContext>({
  isLoading: false,
  onLoading: () => {},
});
