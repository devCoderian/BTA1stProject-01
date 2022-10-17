import React from "react";
import styled from "styled-components";
import { GoKebabVertical } from "react-icons/go";
import { StacksMainnet, StacksTestnet } from "@stacks/network";
import { useRecoilState } from "recoil";
import { NetWorkInfo } from "../../atom/atom";
import stx from "../../../public/img/LOGO.png";
import { goTo } from "react-chrome-extension-router";
import WALLET_SETTING from "../Setting/WALLET_SETTING";
const HomeNav = () => {
  const [currentNetwork, setCurrentNetwork] = useRecoilState(NetWorkInfo);
  const mainnet = new StacksMainnet();
  const testnet = new StacksTestnet();
  const selectList = [mainnet, testnet];
  const handleSelect = (e) => {
    setCurrentNetwork(e.target.value);
  };
  return (
    <>
      <Container>
        <Image src={stx} />
        <SubContainer>
          <Networks onChange={handleSelect}>
            <option value={mainnet}>mainnet</option>
            <option value={testnet}>testnet</option>
          </Networks>
          <h1
            onClick={() => {
              goTo(WALLET_SETTING);
            }}
          >
            <GoKebabVertical />
          </h1>
        </SubContainer>
      </Container>
    </>
  );
};
const Image = styled.img`
  border-radius: 25px;
`;
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
