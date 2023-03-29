import { onGetCategoryAPI } from "api/category";
import { Category } from "api/category/category.type";
import { definedStore } from "helpers";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type UseCategoryStoreType = {
  category: Category | null;
  onUpdateCategory: () => Promise<void>;
};

const useCategoryStore = create<UseCategoryStoreType>()(
  devtools(
    (set) => ({
      category: null,
      onUpdateCategory: async () => {
        const [data, error] = await onGetCategoryAPI();
        if (error) {
          console.log("Error category:", error);
        }
        if (data) {
          set({ category: data }, false, "onUpdateCategory");
        }
      },
    }),
    definedStore("useCategoryStore"),
  ),
);
export default useCategoryStore;
