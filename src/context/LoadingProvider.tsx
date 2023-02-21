import React, { PropsWithChildren, useState } from "react";
import { Loading } from "./LoadingContext";

function LoadingProvider({ children }: PropsWithChildren) {
  const [isLoading, setIsLoading] = useState(false);
  const onLoading = (param: boolean) => {
    setIsLoading(param);
  };
  return <Loading.Provider value={{ isLoading, onLoading }}>{children}</Loading.Provider>;
}
export default LoadingProvider;
