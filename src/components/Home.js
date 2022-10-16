import React, { useState } from "react";
import { goBack } from "react-chrome-extension-router";
import styled from "styled-components";
const Header = styled.header``;
const Container = styled.container`
  display: flex;
  justify-content: space-between;
`;
const Home = () => {
  return (
    <div className="App">
      <Header>
        <div>logo</div>
        <div>
          <div>network change</div>
          <div>setting</div>
        </div>
      </Header>
      <div>
        <div>Account</div>
        <div>0xxxxx...</div>
        <div>{"Nemo"}</div>
      </div>
      <div>
        <div>{0}STX</div>
        <div>{0}KRW</div>
      </div>
      <div>transfer</div>
      <div>
        <div>거래내역</div>
        <div>tradingInfo</div>
      </div>
    </div>
  );
};
