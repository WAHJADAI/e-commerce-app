import { Products } from "api/products/products.type";
import clientApi from "config/axiosConfig";
import { onHandleErrorFromApi } from "helpers";
import { AxiosReturn } from "types/Api.type";

export type onGetProductPropType = {
  item: string;
};

export async function onGetProductDetailAPI(item: onGetProductPropType): AxiosReturn<Products> {
  try {
    const { data } = await clientApi.get<Products>(
      `/products?filters[slug][$eq]=${item}&populate=*`,
    );
    return [data, null];
  } catch (error) {
    return onHandleErrorFromApi(error);
  }
}
