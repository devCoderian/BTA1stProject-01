import React from "react";
import styled from "styled-components";
const TradingBox = () => {
  return (
    <>
      <Container>
        <div>
          <div>{"Oct 17 수신 : ST350J...WW5EJF"}</div>
        </div>
        <BalanceBox>
          <STX>1STX</STX>
          <KRW>1000KRW</KRW>
        </BalanceBox>
      </Container>
    </>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 340px;
  height: 70px;
  margin: 10px;
  background-color: #f0f2f4;
`;
const BalanceBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const STX = styled.span`
  font-weight: 500;
  font-size: 13px;
`;
const KRW = styled.span`
  font-size: 13px;
`;
export default TradingBox;
