import React, {useState} from 'react';
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

function App() {
  const [mnemonic , setMnenmonic] = useState('');
  const getWallet = () => {
    const mnem = lightwallet.keystore.generateRandomSeed();
    setMnenmonic(mnem);
    storage.set('localmnemonic', mnem);
  }

  return (
    <div className="App">
      <header className="App-header">
        <RedHeader onClick={getWallet}>Header {mnemonic}</RedHeader>
        {/* <h3 onClick={() =>getSync()}>get test sync</h3> */}
      </header>
    </div>
  );
}

const BlackHeader = styled.h3`
  font-weight: 900;
  color: black;
`

export default App;
