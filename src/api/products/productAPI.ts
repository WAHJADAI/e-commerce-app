import clientApi from "config/axiosConfig";
import { onHandleErrorFromApi } from "helpers";
import { Products } from "./products.type";

export async function onGetProduct() {
  try {
    const { data } = await clientApi.get<Products>("/products?populate=*");
    return [data, null];
  } catch (error) {
    return onHandleErrorFromApi(error);
  }
}
