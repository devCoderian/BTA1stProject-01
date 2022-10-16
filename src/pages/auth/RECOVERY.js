import React from 'react'
import Header from '../../components/comn/Header'
import styled from 'styled-components';
import InputMnem from '../../components/recovery/InputMnem';

const RECOVERY = () => {
  return (
    <Container>
      <Header title = "Import Wallet"/>
      <InputMnem />
    </Container>
  )
}

export default RECOVERY;

const Container = styled.div`
  width: 360px;
  height: 600px;
  `