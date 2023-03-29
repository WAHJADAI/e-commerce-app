import clientApi from "config/axiosConfig";
import { onHandleErrorFromApi } from "helpers";
import { AxiosReturn } from "types/Api.type";
import { Category } from "./category.type";

export async function onGetCategoryAPI(): AxiosReturn<Category> {
  try {
    const { data } = await clientApi.get<Category>("/categories");
    return [data, null];
  } catch (error) {
    return onHandleErrorFromApi(error);
  }
}
