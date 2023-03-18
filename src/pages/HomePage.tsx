import { onGetProduct } from "api/products/productAPI";
import { Products } from "api/products/products.type";

import clientApi from "config/axiosConfig";
import { onHandleErrorFromApi } from "helpers";
import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import { SyntheticEvent } from "react-toastify/dist/utils";
import useProductsStore from "store/products/product.store";
import styled from "styled-components";
import { shallow } from "zustand/shallow";

const HomePagText = styled.div`
  display: flex;
  flex-wrap: wrap;

  font-size: 3vw;
  @media screen and (max-width: 500px) {
    font-size: 5vw;
  }
`;
const Line = styled.div`
  width: 10vh;
  height: 2px;
  background-color: black;
  margin: 10px;
  :nth-of-type(1) {
    position: relative;
    left: -50px;
  }
  :nth-of-type(even) {
    position: relative;
    left: 100px;
  }
`;
const WrapText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  width: 250px;
  height: 250px;
`;
const ItemName = styled.span`
  font-size: 28px;
  white-space: nowrap;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const ItemTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ItemBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PhotoItem = styled.div`
  width: 150px;
  height: 150px;
`;

const ItemProductWrap = styled.div`
  display: inline-flex;
  padding: 10px;
`;
const WrapContent = styled.div`
  display: flex;
`;
function HomePage() {
  const texts = ["when", "shopping", "makes you", "happy"];
  const [name, setName] = useState("");
  const { productsStore, onGetProductStore } = useProductsStore(
    (state) => ({ productsStore: state.productsStore, onGetProductStore: state.onGetProductStore }),
    shallow,
  );
  const [showItem, setShowItem] = useState(productsStore?.data);
  const filter = (e: ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    if (keyword !== "") {
      const results = showItem?.filter((product) => {
        return product.name?.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setShowItem(results);
    } else {
      setShowItem(productsStore?.data);
    }
    setName(keyword);
  };
  type Category = {
    data?: CategoryData[];
    meta?: Meta;
  };
  //note getCategory
  ///
  ////
  ////

  type CategoryData = {
    id?: number;
    title?: string;
    desc?: string;
    createdAt?: Date;
    updatedAt?: Date;
    publishedAt?: Date;
  };

  type Meta = {
    pagination?: Pagination;
  };

  type Pagination = {
    page?: number;
    pageSize?: number;
    pageCount?: number;
    total?: number;
  };
  const [category, setCategory] = useState<Category>();

  async function onGetCategories() {
    const { data } = await clientApi.get<Category>("/categories");
    setCategory(data);
    return data;
  }

  useEffect(() => {
    if (!productsStore) {
      onGetProductStore();
      onGetCategories();
    }
    setShowItem(productsStore?.data);
  }, [productsStore, category]);

  if (!productsStore) {
    return null;
  }
  const handleCategory = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      if (showItem?.length == productsStore.data?.length) {
        const result = productsStore?.data?.filter((productItem) => {
          return productItem.category?.title == event.target.name;
        });
        setShowItem(result);
      } else {
        const result = productsStore?.data?.filter((productItem) => {
          return productItem.category?.title == event.target.name;
        });

        setShowItem((showItem) => showItem?.concat(result ?? []));
      }
    } else {
      const result = showItem?.filter((productItem) => {
        return productItem.category?.title !== event.target.name;
      });
      if (result?.length === 0) {
        setShowItem(productsStore.data);
      } else setShowItem(result);
    }
  };

  return (
    <div>
      <WrapText>
        <Line></Line>
        {texts.map((text, index) => (
          <HomePagText key={index}>{text}</HomePagText>
        ))}

        <Line></Line>
      </WrapText>

      <div style={{ display: "flex", padding: "20px", justifyContent: "center" }}>
        <div>
          <div>
            <input
              type='search'
              value={name}
              onChange={filter}
              className='input'
              placeholder='Filter'
            />
          </div>

          <div>
            {category &&
              category.data?.map((category) => (
                <>
                  <input
                    type='checkbox'
                    name={category.title}
                    id={category.id?.toString()}
                    onChange={handleCategory}
                  />
                  <span>{category.title}</span>
                  <br />
                </>
              ))}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
          {showItem && showItem.length > 0 ? (
            showItem.map((product) => (
              <ItemProductWrap key={product.id}>
                <Item>
                  <ItemTop>
                    <span>{product.isNew ? "New" : "Previously owned"}</span>
                    <span>{product.stock}</span>
                  </ItemTop>
                  <ItemBottom>
                    <ItemName>{product.name}</ItemName>
                    <PhotoItem>
                      <img src={product.img?.url} width='150px' height='150px' />
                    </PhotoItem>
                  </ItemBottom>

                  <span>$ {product.price}</span>
                </Item>
              </ItemProductWrap>
            ))
          ) : (
            <h1>No results found!</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
