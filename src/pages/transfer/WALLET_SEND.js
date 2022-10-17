import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/comn/Header";

import { Link, goTo } from "react-chrome-extension-router";
import WALLET_SUMMARY from "./WALLET_SUMMARY";
import { useRecoilValue, useRecoilState } from "recoil";
import { AddressInfo, NetWorkInfo, RecipientInfo } from "../../atom/atom";
const WALLET_SEND = () => {
  const [amount, setAmount] = useState(0);
  const [recipientUser, SetRecipientUser] = useRecoilState(RecipientInfo);
  const address = useRecoilValue(AddressInfo);
  const handleToUser = (e) => {
    SetRecipientUser(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  return (
    <Container>
      <Header />
      <TopicText>Send STX</TopicText>
      <SubContainer>
        <BalanceBox>
          <InputParentBox>
            <label>TO</label>
            <InputBox onChange={handleToUser}></InputBox>
          </InputParentBox>
          <InputParentBox>
            <label>STX</label>
            <InputBox onChange={handleAmount}></InputBox>
          </InputParentBox>
          <InputParentBox>
            <label>Fee</label>
            <InputBox></InputBox>
            <div>평균 </div>
          </InputParentBox>
        </BalanceBox>
        <Btn
          onClick={() => {
            goTo(WALLET_SUMMARY);
          }}
        >
          Next
        </Btn>
      </SubContainer>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 360px;
  height: 600px;
  margin: 0 auto;
  padding-left: 30px;
`;
const TopicText = styled.span`
  margin-top: -30px;
  font-size: 30px;
  font-weight: bold;
  top: 0;
  padding-bottom: 50px;
`;
const SubContainer = styled.div`
  width: 330px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const BalanceBox = styled.div``;
const InputParentBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  font-weight: 600;
`;
const InputBox = styled.input`
  width: 325px;
  height: 46px;
  border: 0.5px gray solid;
  border-radius: 12px;
  margin: 18px 0px;
`;
const Btn = styled.button`
  background-color: black;
  width: 325px;
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
export default WALLET_SEND;
