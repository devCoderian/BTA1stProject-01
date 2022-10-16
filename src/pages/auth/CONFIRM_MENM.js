import React from 'react'
import Header from '../../components/comn/Header'
import styled from 'styled-components';
import ConfirmMenm from '../../components/create/ConfirmMenmonic';

const CONFIRM_MENM = ({params}) => {
  return (
    <Container>
      <Header title = "Confirm recovery phrase"/>
      <ConfirmMenm params={params}/>
    </Container>
  )
}

export default CONFIRM_MENM;

const Container = styled.div`
  width: 360px;
  height: 600px;
  `