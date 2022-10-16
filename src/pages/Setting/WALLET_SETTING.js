import React from "react";
import styled from "styled-components";
import { IoIosKey } from "react-icons/io";
import Header from "../../components/comn/Header";
const WALLET_SETTING = () => {
  return (
    <Container>
      <Header title="Setting" />
      <div>
        내 계정
        {<div>Account</div>}
        {
          //map으로 뿌려야함
        }
      </div>
      <div>+ 계정 추가하기</div>
      <div>+ 계정 추가하기</div>
      <div>
        <h1>
          <IoIosKey />
        </h1>
        <div>비공개 키 생성하기</div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  width: 360px;
  height: 600px;
`;
export default WALLET_SETTING;
