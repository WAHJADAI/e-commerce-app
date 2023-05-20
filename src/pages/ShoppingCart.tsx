import React from "react";
import styled from "styled-components";
type Props = {};
const CheckoutButton = styled.button`
  display: inline-block;
  width: 150px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #03045e;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in;
  z-index: 1;
  ::before,
  ::after {
    content: "";
    position: absolute;
    top: 0;
    width: 0;
    height: 100%;
    transform: skew(15deg);
    transition: all 0.5s;
    overflow: hidden;
    z-index: -1;
  }
  ::before {
    left: -10px;
    background: #240046;
  }
  ::after {
    right: -10px;
    background: #5a189a;
  }
  :hover::before,
  :hover::after {
    width: 58%;
  }
  :hover span {
    color: #e0aaff;
    transition: 0.3s;
  }
  span {
    color: #03045e;
    font-size: 18px;
    transition: all 0.3s ease-in;
  }
`;
const WrapShoppingCart = styled.div`
  display: flex;
  height: 70vh;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;
const WrapButtonBottom = styled.div`
  position: relative;
  bottom: 0;
  z-index: -1;
`;
const WrapShoppingCartItem = styled.div``;
function ShoppingCart({}: Props) {
  return (
    <WrapShoppingCart>
      <WrapShoppingCartItem>Your cart is empty.</WrapShoppingCartItem>
      <WrapButtonBottom>
        <CheckoutButton>
          <span> CHECKOUT</span>
        </CheckoutButton>
      </WrapButtonBottom>
    </WrapShoppingCart>
  );
}

export default ShoppingCart;
