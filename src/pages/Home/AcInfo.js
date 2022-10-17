import React, { useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { AddressInfo } from "../../atom/atom";

const AcInfo = () => {
  const [address, setAddress] = useRecoilState(AddressInfo);
  chrome.storage.local.get(["address"], function (result) {
    console.log("Value currently is address " + result.address);
    setAddress(result.address);
  });
  return (
    <>
      <Container>
        <AccountText>Account</AccountText>
        <AddressText>{address}</AddressText>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 360px;
  height: 80px;
  background-color: #f0f2f4;
  flex-direction: column;
`;

const AccountText = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const AddressText = styled.span`
  font-weight: 400;
  font-size: 10px;
`;

export default AcInfo;
