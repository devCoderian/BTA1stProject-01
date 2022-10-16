import React from "react";
import Header from "../../components/comn/Header";
import InputPassword from "../../components/create/InputPassword";
import CREATE_MNEM from "./CREATE_MNEM";
import styled from 'styled-components';

const WALLET_AUTH = () => {
    return(
        <Container>
        <Header title = "Make your password"/>
        <InputPassword /> 
        {/* <CREATE_MNEM /> */}
        </Container>
    )
}

export default WALLET_AUTH;

const Container = styled.div`
  width: 360px;
  height: 600px;
`
