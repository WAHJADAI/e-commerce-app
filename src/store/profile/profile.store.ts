import useAuthenticationStore from "store/authentication/authentication.store";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ProfileType } from "./type";

type UseProfileStoreType = {
  user: ProfileType | null;
  onUpdateUser: (user: ProfileType) => ProfileType;
  onRemoveUser: () => void;
};
const useProfileStore = create<UseProfileStoreType>()(
  devtools(
    (set) => ({
      user: null,
      onUpdateUser: (user) => {
        set({ user }, false, "onUpdateUser");
        return user;
      },
      onRemoveUser: () => {
        set({ user: null }, false, "onRemoveUser");
        useAuthenticationStore.getState().onRemoveJwt();
      },
    }),
    { store: "useProfileStore" },
  ),
);
export default useProfileStore;
