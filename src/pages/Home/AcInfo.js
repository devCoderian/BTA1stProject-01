import React from "react";
import styled from "styled-components";
const AcInfo = () => {
  return (
    <>
      <Container>
        <AccountText>Account</AccountText>
        <div>
          <AddressText>0x0000111111....</AddressText>
          <span>CLip</span>
        </div>
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
  font-size: 14px;
`;
export default AcInfo;
