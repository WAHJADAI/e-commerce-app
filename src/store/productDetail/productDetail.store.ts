import { onGetProductDetailAPI, onGetProductPropType } from "api/productDetail";
import { Products } from "api/products/products.type";
import { definedStore } from "helpers";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type UseProductDetailType = {
  productDetailStore: Products | null;
  onGetProductDetailStore: ({ item }: onGetProductPropType) => Promise<void>;
};

const useProductDetail = create<UseProductDetailType>()(
  devtools(
    (set) => ({
      productDetailStore: null,
      onGetProductDetailStore: async (item) => {
        const [data, error] = await onGetProductDetailAPI(item);
        if (error) {
          console.log("Error :", error);
        }
        if (data) {
          set({ productDetailStore: data }, false, "onGetProductDetailStore");
        }
      },
    }),
    definedStore("useProductsStore"),
  ),
);
export default useProductDetail;
