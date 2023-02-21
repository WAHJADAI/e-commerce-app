import React from "react";
import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 4px solid #fff;
  border-right: 4px solid #fff;
  border-bottom: 4px solid #fff;
  border-left: 4px solid #8c64e6;
  background: transparent;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const LoadingWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

function Loading() {
  return (
    <LoadingWrapper>
      <Spinner />
    </LoadingWrapper>
  );
}

export default Loading;
