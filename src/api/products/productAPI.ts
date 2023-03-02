import clientApi from "config/axiosConfig";
import { Products } from "./products.type";

export async function onGetProduct() {
  try {
    const response = await clientApi.get<Products>("/api/products?populate=*");
    return response;
  } catch (error) {
    console.error("😎😋");
  }
}
