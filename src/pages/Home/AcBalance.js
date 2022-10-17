import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, goTo } from "react-chrome-extension-router";
import WALLET_SEND from "../transfer/WALLET_SEND";
import RECOVERY from "../auth/RECOVERY";
import { useRecoilValue } from "recoil";
import { useRecoilState } from "recoil";
const AcBalance = () => {
  return (
    <>
      <Container>
        <BalanceBox>
          <STX>{490} STX</STX>
        </BalanceBox>
        <div>
          <Btn
            onClick={() => {
              goTo(WALLET_SEND);
            }}
          >
            transfer
          </Btn>
        </div>
      </Container>
    </>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 360px;
  height: 200px;
`;
const BalanceBox = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;
const STX = styled.span`
  font-weight: 500;
  font-size: 40px;
`;
const KRW = styled.span`
  display: flex;
  justify-content: end;
  font-size: 18px;
`;
const Btn = styled.button`
  background-color: black;
  width: 166px;
  height: 46px;
  margin: 30px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  text-decoration: none;
`;
export default AcBalance;
