import React, { useState } from 'react';
import sha256 from 'sha256';
import styled from 'styled-components';
import storage from '../../utils/storage';
import {
    goTo
} from 'react-chrome-extension-router';
import CreateMnem from '../../pages/auth/CREATE_MNEM';



const InputPassword = () => {

    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [confirm, setConfirm] = useState(null);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handlePasswordConfirmChange = (event) => {
        setPasswordConfirm(event.target.value);
    }


    const handleSubmit = async () => {
        console.log('[password]:', password);
        console.log('[passwordConfirm]:', passwordConfirm);
        if (password !== passwordConfirm) {
            setPassword('');
            setPasswordConfirm('');
            setConfirm(false);
        } else {

            let hashPassword = sha256(password);
            await storage.set('password', hashPassword);
            // await storage.get('password').then((res) => {
            //     console.log( JSON.parse(res));
            // });
            let test = chrome.storage.local.get(['password'], function (result) {
                console.log('Value currently is ' + result.password);
                console.log('2');
            });

            goTo(CreateMnem);
        }
    }
    return (
        <InputContainer>
            <Label>
                password
            </Label>
            <Input
                onChange={handlePasswordChange}
                placeholder='password'
                type="password"
                name="password"
                value={password}
            />
            <Label>
                password check
            </Label>
            <Input
                onChange={handlePasswordConfirmChange}
                placeholder='password'
                type="password"
                name="password"
                value={passwordConfirm}
            />
            {(!confirm && confirm !== null) && <Warning>비밀번호가 일치하지 않습니다.</Warning>}
            <Button onClick={handleSubmit}>
                Next
            </Button>

        </InputContainer>
    )
}



const InputContainer = styled.div`
    width: 286px;
    margin: 50px auto;
`
const Label = styled.h4`
    margin-top: 22px;
    font-size: 14px; 
`
const Input = styled.input`
    width: 286px;
    height: 42px;
    border-radius: 10px;
    border: 1px solid #A5A5A5;
    box-sizing :border-box;
    padding: 10px;
`
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
const Warning = styled.h4`
    color: #9A0000;
`

export default InputPassword;