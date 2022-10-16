import React from "react";
import styled from "styled-components";
import { GoKebabVertical } from "react-icons/go";
import Network from "../../context/Network";
import { StacksMainnet, StacksTestnet } from "@stacks/network";
import { useRecoilState } from "recoil";
import { NetWorkInfo } from "../../atom/atom";
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
        <div>logo</div>
        <img src="/Users/minwoonam/Documents/GitHub/BTA1stProject-01/public/img/STX.png" />
        <SubContainer>
          <Networks onChange={handleSelect}>
            {selectList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
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
