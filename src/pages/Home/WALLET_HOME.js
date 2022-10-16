import React from "react";
import styled from "styled-components";
import HomeNav from "./HomeNav";
import AcBalance from "./AcBalance";
import AcInfo from "../Home/AcInfo";
import TradingInfo from "./TradingInfo";
import TradingBox from "../Home/TradingBox";
const WALLET_HOME = () => {
  return (
    <Container>
      <HomeNav />
      <AcInfo />
      <AcBalance />
      <TradingInfo />
      <TradingBox />
      <TradingBox />
      <TradingBox />
    </Container>
  );
};
const Container = styled.div`
  width: 360px;
  height: 600px;
`;

export default WALLET_HOME;
