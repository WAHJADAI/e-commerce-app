import { onGetProduct } from "api/products/productAPI";
import { Products } from "api/products/products.type";

import clientApi from "config/axiosConfig";
import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import { SyntheticEvent } from "react-toastify/dist/utils";
import useProductsStore from "store/products/product.store";
import styled from "styled-components";
import { shallow } from "zustand/shallow";

const HomePagText = styled.div`
  display: flex;
  flex-wrap: wrap;

  font-size: 40px;
`;
const Line = styled.div`
  width: 200px;
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
  height: 300px;
`;
const ItemName = styled.span`
  font-size: 28px;
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

function HomePage() {
  const texts = ["when", "shopping", "makes you", "happy"];

  const { productsStore, onGetProductStore } = useProductsStore(
    (state) => ({ productsStore: state.productsStore, onGetProductStore: state.onGetProductStore }),
    shallow,
  );

  useEffect(() => {
    if (!productsStore) {
      onGetProductStore();
    }
    console.log("😍😘", productsStore);
  }, [productsStore]);

  if (!productsStore) {
    return null;
  }
  const [name, setName] = useState("");
  const [foundUsers, setFoundUsers] = useState(productsStore?.data);
  const filter = (e: ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    if (keyword !== "") {
      const results = productsStore?.data?.filter((product) => {
        return product.name?.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(productsStore?.data);
    }
    setName(keyword);
  };
  return (
    <>
      <WrapText>
        <Line></Line>
        {texts.map((text, index) => (
          <HomePagText key={index}>{text}</HomePagText>
        ))}

        <Line></Line>
        <div>
          <Item>
            <ItemTop>
              <span>Name brand</span>
              <span>value</span>
            </ItemTop>
            <ItemBottom>
              <ItemName>Name Item</ItemName>
              <PhotoItem>Photo</PhotoItem>
            </ItemBottom>

            <span>price</span>
          </Item>
        </div>
      </WrapText>
      <input type='search' value={name} onChange={filter} className='input' placeholder='Filter' />
      {foundUsers && foundUsers.length > 0 ? (
        foundUsers.map((product, index) => (
          <ItemProductWrap key={index}>
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
    </>
  );
}

export default HomePage;
