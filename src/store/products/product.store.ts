import { onGetProduct } from "api/products/productAPI";
import { Products } from "api/products/products.type";
import { definedStore } from "helpers";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type UseProductsStoreType = {
  productsStore: Products | null;
  onGetProductStore: () => Promise<void>;
};

const useProductsStore = create<UseProductsStoreType>()(
  devtools(
    (set) => ({
      productsStore: null,
      onGetProductStore: async () => {
        const [data, error] = await onGetProduct();
        if (error) {
          console.log("Error :", error);
        }
        if (data) {
          set({ productsStore: data }, false, "onGetProductStore");
        }
      },
    }),
    definedStore("useProductsStore"),
  ),
);

export default useProductsStore;
