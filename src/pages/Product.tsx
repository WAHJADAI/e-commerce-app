import { onGetProductDetailAPI } from "api/productDetail";
import { ProductData, Products } from "api/products/products.type";
import clientApi from "config/axiosConfig";
import { onHandleErrorFromApi } from "helpers";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProductDetail from "store/productDetail/productDetail.store";
import { shallow } from "zustand/shallow";

export default function Product() {
  const { slug } = useParams<string>();
  const { productDetailStore, onGetProductDetailStore } = useProductDetail(
    (state) => ({
      productDetailStore: state.productDetailStore,
      onGetProductDetailStore: state.onGetProductDetailStore,
    }),
    shallow,
  );

  useEffect(() => {
    if (slug) onGetProductDetailStore(slug);
  }, [slug]);

  return (
    <div>
      {productDetailStore &&
        productDetailStore.data?.map((product) => (
          <div key={product.id}>
            <div>{product.name}</div>
            <div>
              <img src={product.img?.url} width='150px' height='150px' />
            </div>
          </div>
        ))}
      product-{slug}{" "}
    </div>
  );
}
