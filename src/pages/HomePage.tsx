import React from "react";
import styled from "styled-components";

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

  border: solid;
  border-color: black;
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
  border: solid;
  border-color: black;
  width: 150px;
  height: 150px;
`;
function HomePage() {
  const texts = ["when", "shopping", "makes you", "happy"];
  return (
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
  );
}

export default HomePage;
