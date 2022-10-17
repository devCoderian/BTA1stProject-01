import React, { useEffect, useState } from "react";
import Header from "../../components/comn/Header";
import styled from "styled-components";
import Login from "../../components/login/Login";
import Home from "../../components/login/Home";

const LOGIN = () => {
  const [user, setUser] = useState(null);

  const clear = () => {
    chrome.storage.local.clear(function (result) {
      console.log(result);
    });
  };

  useEffect(() => {
    // clear();
    chrome.storage.local.get(["password"], function (result, err) {
      console.log(result.password);
      if (result.password === undefined) {
        setUser(false);
      } else {
        setUser(true);
      }
    });
  }, []);

  return (
    <Container>
      <Header title="WELCOME!" nav={false} />
      {user ? <Login /> : <Home />}
    </Container>
  );
};

export default LOGIN;

const Container = styled.div`
  width: 360px;
  height: 600px;
`;
