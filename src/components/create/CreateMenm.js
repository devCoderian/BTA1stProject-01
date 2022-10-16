import React, { useState } from 'react'
import { generateSecretKey } from '@stacks/wallet-sdk';
import sha256 from "sha256";
import storage from '../../utils/storage';


const CreateMenm = () => {

    const [mnem, setMnem] = useState('');
    const createMnem = () => {
        console.log(generateSecretKey());
        return generateSecretKey();
    }

    const onSubmit = () => { 
        chrome.storage.local.get(['password'], function(result) {
            console.log(result);
        });
    }
    return (
        <>
        <div onClick={onSubmit}>니모닉코드주의점니모닉코드주의점니모닉코드주의점니모닉코드주의점니모닉코드주의점니모닉코드주의점니모닉코드주의점</div>
        {createMnem()}

        </>
    )
}

export default CreateMenm