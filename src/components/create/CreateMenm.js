import React, { useEffect, useState } from 'react'
import { generateSecretKey, generateWallet, generateNewAccount, getStxAddress } from '@stacks/wallet-sdk';
import sha256 from "sha256";
import storage from '../../utils/storage';
import styled from 'styled-components';
import {
    goTo
  } from 'react-chrome-extension-router';
import CONFIRM_MENM from '../../pages/auth/CONFIRM_MENM';


const CreateMenm = () => {

    const [mnem, setMnem] = useState([]);
    const [paramMnem, setParamMnem] = useState('');
    useEffect(() => {
        createMnem();
    },[])

    const createMnem = (len=128) => {
        // console.log(generateSecretKey(len));
        let menm = generateSecretKey(len);
        setParamMnem(menm);
        console.log('menm', menm)
        let wordList = menm.split(' ');
        setMnem(wordList);
    }

    const goToNext = async() => { 
        goTo(CONFIRM_MENM, {params: mnem.toString()});
    }
    return (
        <Container>
            <Warning>
                현재 제시하는 니모닉 코드(단어 목록)을 작성하여 안전한 장소에 보관해주세요.

                니모닉 코드는 휴대폰 분실, 도난, 손상, 업그레이드 등의 환경 변화에서 지갑을 재사용할 수 있는 유일한 방법입니다.
               
            </Warning>
            <BtnContainer>
                <LengthBtn onClick={() =>createMnem(128) }>
                    12개
                </LengthBtn>
                <LengthBtn onClick={() =>createMnem(256) }>
                    24개
                </LengthBtn>
            </BtnContainer>
            <WordList>
                {
                    mnem?.map((item, index) => {
                        return (
                            <>
                           
                            <Word key={index}>
                                {index+1}. {item}
                                </Word>
                                </>
                        )
                    })
                }
            </WordList>
            <Button onClick={goToNext}>
                    Next
            </Button>
        </Container>
    )
}

export default CreateMenm;

const Container = styled.div`
    width: 286px;
    margin: 10px auto;
`

const Warning = styled.div`
    color: #9A0000;
    border-radius: 4px;
    border: 1px solid #A5A5A5;
    padding: 10px;
    font-weight: 500;
    
`

const WordList = styled.div`
    width: 286px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
`

const Word = styled.div`
    width: 78px;
    height: 20px;
    margin-top: 5px;
    font-size: 11px;
    font-weight: 500;
    color: #000;
    border-radius: 4px;
    border: 1px solid #A5A5A5;
    margin: 5px;
    padding: 2px; 
    text-align: center;
    align-items: center;
`;
const Button = styled.button`
    border: 1px solid #000;
    border-radius: 10px;
    background-color: #000;
    width: 286px;
    height: 42px;
    color: #fff;
    margin-top: 18px;
    cursor: pointer 
`

const BtnContainer = styled.div`
    width: 120;
    height: 32px;
    display: 'flex';
    margin-left: 5px;
`
const LengthBtn = styled.button`
    width: 60px;
    margin-top: 10px;
    height: 28px;
    background-color: lightgray;
    cborder: none;
    border: 1px solid lightgray;
    border-radius: 5px;
    margin-right: 5px;
    cursor: pointer 
`