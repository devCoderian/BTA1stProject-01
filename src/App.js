import React, {useEffect, useState} from 'react';
import './App.css';
import storage from './utils/storage';
const lightwallet = require("eth-lightwallet");
import {
  goBack,
  goTo,
  popToTop,
  Link,
  Router,
  getCurrent,
  getComponentStack,
} from 'react-chrome-extension-router';
import Test from './Test'; 
import styled from 'styled-components';
import { useContext } from './context/WalletProvider';
function App() {
  const { AccountChange, getAccount } = useContext();
  const [mnemonic , setMnenmonic] = useState('');
  useEffect(() => {
    setMnenmonic(getAccount());
  })

  // const getWallet = () => {
  //   const mnem = lightwallet.keystore.generateRandomSeed();
  //   setMnenmonic(mnem);
  //   storage.set('localmnemonic', mnem);
  // }

  return (
    <div className="App">
      <header className="App-header">
        {/* <BlackHeader onClick={getWallet}>Header {mnemonic}</BlackHeader> */}
        <BlackHeader onClick={() => AccountChange('ian')}>Header {mnemonic}</BlackHeader>
        <h1>{mnemonic}</h1>
      </header>
    </div>
  );
}

const BlackHeader = styled.h3`
  font-weight: 900;
  color: black;
`

export default App;