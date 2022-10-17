import React, { useState } from "react";
import sha256 from "sha256";
import styled from "styled-components";
import storage from "../../utils/storage";
import { goTo } from "react-chrome-extension-router";
import WALLET_HOME from "../../pages/home/WALLET_HOME";
const Login = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState(null);
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    console.log("[password]:", password);
    let hashedPassword = sha256(password);
    let storagePassword = "";
    chrome.storage.local.get(["password"], function (result) {
      console.log("password", JSON.parse(result.password));
      storagePassword = JSON.parse(result.password);
      if (hashedPassword === JSON.parse(result.password)) {
        console.log("일치");
        goTo(WALLET_HOME);
      } else {
        console.log("불일치");
        setConfirm(true);
      }
    });

    console.log("hashed", hashedPassword);
    console.log(storagePassword.toString() === hashedPassword.toString());
  };
  return (
    <InputContainer>
      <Label>password</Label>
      <Input
        onChange={handlePasswordChange}
        placeholder="password"
        type="password"
        name="password"
        value={password}
      />
      {!confirm && confirm !== null && (
        <Warning>비밀번호가 일치하지 않습니다.</Warning>
      )}
      <Button onClick={handleSubmit}>Next</Button>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  width: 286px;
  margin: 50px auto;
`;
const Label = styled.h4`
  margin-top: 22px;
  font-size: 14px;
`;
const Input = styled.input`
  width: 286px;
  height: 42px;
  border-radius: 10px;
  border: 1px solid #a5a5a5;
  box-sizing: border-box;
  padding: 10px;
`;
const Button = styled.button`
  border: 1px solid #000;
  border-radius: 10px;
  background-color: #000;
  width: 286px;
  height: 42px;
  color: #fff;
  margin-top: 18px;
  cursor: pointer;
`;
const Warning = styled.h4`
  color: #9a0000;
`;

export default Login;
