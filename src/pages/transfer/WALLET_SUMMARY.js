import React from "react";
import styled from "styled-components";
import Header from "../../components/comn/Header";
const WALLET_SUMMARY = () => {
  return (
    <Container>
      <Header />
      <div>Summary</div>
      <SubContainer>
        <div>{0}STX</div>
        <div>
          <div>
            <span>FROM</span>
            <span></span>
          </div>
          <div>
            <span>TO</span>
            <span></span>
          </div>
          <div>
            <span>Fee</span>
            <span></span>
          </div>
        </div>
        <Btn>Next</Btn>
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
  margin-left: 30px;
`;
const SubContainer = styled.div`
  width: 330px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
export default WALLET_SUMMARY;
