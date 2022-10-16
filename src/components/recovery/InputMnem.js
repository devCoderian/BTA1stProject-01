import React, { useState, useEffect } from 'react';
import sha256 from 'sha256';
import { generateSecretKey, generateWallet, generateNewAccount, getStxAddress } from '@stacks/wallet-sdk';
import styled from 'styled-components';
import storage from '../../utils/storage';
import {
    goTo
} from 'react-chrome-extension-router';
import saltedSha256 from 'salted-sha256';

const InputMnem = () => {

    const [arrlength, setLength] = useState(12);
    // let temp = Array.from({ length: length });
    const [inputArray, setInputArray] = useState(Array.from({ length: arrlength }));

    useEffect(() => {
        console.log('변경')
        setInputArray(Array.from({ length: arrlength }));
        makeNumberId(arrlength);
        setNumArray(numberId);
    }, [arrlength]);

    let numberId = [];
    const makeNumberId = () => {
        for (let i = 0; i < arrlength; i++) {
            numberId.push({ id: i, text: '' });
        }
    }
    const [numArray, setNumArray] = useState(numberId);

    const goToNext = () => {
        console.log('확인')
    }
    const onChangeMnemonic = (e, idx) => {
        console.log(e.target.value, idx);
        let value = e.target.value;
        setNumArray([...numArray], { ...(numArray[idx].text = value) });
        let word = [...inputArray];
        for (let i = 1; i < 13; i++) {
            word[idx] = value.trim();
        }
        setInputArray([...word]);
    };

    const checkMnemonic = () => {
        let arr = inputArray.join(' ');
        chrome.storage.local.get(['password'], function (result) {
            console.log(JSON.parse(result.password));
            generateWallet({
                secretKey: arr,
                password: result.password
            }).then(async (res) => {
                // 비밀키 => res.stxPrivateKey;
                const saltedHashAsync = await saltedSha256(res.accounts[0].stxPrivateKey, result.password, true);
                console.log('saltedHashAsync', saltedHashAsync);
                const address = getStxAddress({ account: res.accounts[0] });
                console.log(address);
                storage.set('privateKey', saltedHashAsync);
                //
                goToNext();
            })
        });

    };

    return (
        <Container>
            <Warning>
                지갑 복구를 위해 니모닉 코드를 입력해주세요.
            </Warning>
            <BtnContainer>
                <LengthBtn onClick={() => setLength(12)}>
                    12개
                </LengthBtn>
                <LengthBtn onClick={() => setLength(24)}>
                    24개
                </LengthBtn>
            </BtnContainer>
            <WordList>
                {
                    numArray.map((item, index) => {
                        return (
                            <>
                                <Word
                                    placeholder={index + 1}
                                    onChange={(e) => onChangeMnemonic(e, index)}
                                    value={item.text}
                                />
                            </>
                        )
                    })
                }
            </WordList>
            <Button onClick={checkMnemonic}>
                Next
            </Button>
        </Container>
    )
}

export default InputMnem;
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

const Word = styled.input`
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