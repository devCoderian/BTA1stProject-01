import React from "react";
import styled from "styled-components";
import { GoKebabVertical } from "react-icons/go";
import Network from "../../context/Network";
import { StacksMainnet, StacksTestnet } from "@stacks/network";
const HomeNav = () => {
  const network = new StacksMainnet();
  const testnet = new StacksTestnet();
  return (
    <>
      <Container>
        <div>logo</div>
        <SubContainer>
          <Networks>
            <option key="mainnet" value={network}>
              mainnet
            </option>
            <option key="testnet" value={testnet}>
              testnet
            </option>
          </Networks>
          <h1>
            <GoKebabVertical />
          </h1>
        </SubContainer>
      </Container>
    </>
  );
};
const Container = styled.div`
  width: 360px;
  height: 50px;
  display: flex;
  margin: 0px;
  margin-bottom: 0;
  justify-content: space-between;
`;
const SubContainer = styled.div`
  display: flex;
  margin-right: 5px;
`;
const Networks = styled.select`
  display: flex;
  width: 120px;
  height: 35px;
  justify-content: center;
  margin: 10px;
  padding: 5px;
  border-radius: 8px;
`;
export default HomeNav;
