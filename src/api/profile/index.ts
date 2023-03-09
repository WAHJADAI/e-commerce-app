import clientApi from "config/axiosConfig";
import { onHandleErrorFromApi } from "helpers";
import { ProfileType } from "store/profile/type";
import { AxiosReturn } from "types/Api.type";

export async function onGetProfileWithUserId(userId: string): AxiosReturn<ProfileType> {
  try {
    const { data } = await clientApi.get(`/users/${userId}`);
    return [data, null];
  } catch (error) {
    return onHandleErrorFromApi(error);
  }
}
