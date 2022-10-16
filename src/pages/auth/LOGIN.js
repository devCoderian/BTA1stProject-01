import React from 'react'
import Header from '../../components/comn/Header'
import CreateMenm from '../../components/create/CreateMenm';
import styled from 'styled-components';
import Login from '../../components/login/Login';

const LOGIN = () => {
  return (
    <Container>
      <Header title = "WELCOME!"/>
      <Login />
    </Container>
  )
}

export default LOGIN;

const Container = styled.div`
  width: 360px;
  height: 600px;
  `