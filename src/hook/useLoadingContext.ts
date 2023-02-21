import { Loading } from "context/LoadingContext";
import { useContext } from "react";

function useLoadingContext() {
  const context = useContext(Loading);
  return context;
}

export default useLoadingContext;
