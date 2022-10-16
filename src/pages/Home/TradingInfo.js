import React from "react";
import styled from "styled-components";
import TradingBox from "./TradingBox";
const TradingInfo = () => {
  return (
    <>
      <Header>거래내역</Header>
      <TradingBox />
    </>
  );
};
const Header = styled.header`
  display: flex;
  justify-content: center;
  font-size: 18px;
`;
export default TradingInfo;
