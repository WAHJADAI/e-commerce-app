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
  const [foundUsers, setFoundUsers] = useState(productsStore?.data);
  const filter = (e: ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    if (keyword !== "") {
      const results = foundUsers?.filter((product) => {
        return product.name?.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(productsStore?.data);
    }
    setName(keyword);
  };

  useEffect(() => {
    if (!productsStore) {
      onGetProductStore();
      console.log(productsStore);
    }
    setFoundUsers(productsStore?.data);
    console.log("🤣");
  }, [productsStore]);

  if (!productsStore) {
    return null;
  }

  return (
    <div>
      <WrapText>
        <Line></Line>
        {texts.map((text, index) => (
          <HomePagText key={index}>{text}</HomePagText>
        ))}

        <Line></Line>
      </WrapText>

      <div style={{ display: "flex", padding: "20px" }}>
        <div>
          <input
            type='search'
            value={name}
            onChange={filter}
            className='input'
            placeholder='Filter'
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
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
        </div>
      </div>
    </div>
  );
}

export default HomePage;
