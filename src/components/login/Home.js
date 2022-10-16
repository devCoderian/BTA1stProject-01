import React, { useEffect, useState } from 'react';
import { goTo } from 'react-chrome-extension-router';
import styled from 'styled-components';
import stx from '../../../public/img/LOGO.png';
import LOGIN from '../../pages/auth/LOGIN';
import WALLET_AUTH from '../../pages/auth/WALLET_AUTH';
import RECOVERY from '../../pages/auth/RECOVERY';
const Home = () => {
    const goToNext = async(page) => { 
        goTo(page);
    }

    return (
        <Container>
            <Image src={stx}/>
            <BtnContainer>
                <Button onClick={() => goTo(WALLET_AUTH)}>
                    create wallet
                </Button>
                <Button onClick={() => goTo(RECOVERY)}>
                    recovery wallet
                </Button>
            </BtnContainer>
        </Container>
    )
}

export default Home;
const Container = styled.div`
  width: 280px;
  margin: 0 auto;
  `
  const Image = styled.img`
  width: 90px;
  display: block;
  margin: 70px auto;
`
const BtnContainer = styled.div`
    margin-top: 120px;
`

const Button = styled.button`
  border: 1px solid #000;
  border-radius: 10px;
  background-color: #000;
  width: 286px;
  height: 42px;
  color: #fff;
  margin-top: 18px;
  cursor: pointer;
`
