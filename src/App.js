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
import { useContext } from './context/WalletProvider';
import WALLET_AUTH from './pages/auth/WALLET_AUTH';
import CREATE_MNEM from './pages/auth/CREATE_MNEM';
import LOGIN from './pages/auth/LOGIN';
import RECOVERY from './pages/auth/RECOVERY';

function App() {
  // ContextAPI Test
  // const { AccountChange, getAccount } = useContext();
  const [mnemonic , setMnenmonic] = useState('');
  // useEffect(() => {
  //   setMnenmonic(getAccount());
  // })

  // node.js 브라우저 Test
  // const getWallet = () => {
  //   const mnem = lightwallet.keystore.generateRandomSeed();
  //   setMnenmonic(mnem);
  //   storage.set('localmnemonic', mnem);
  // }

  return (
    
    // <div className="App">
    //   <header className="App-header">
    //     {/* <BlackHeader onClick={getWallet}>Header {mnemonic}</BlackHeader> */}
    //     <BlackHeader onClick={() => AccountChange('ian')}>Header {mnemonic}</BlackHeader>
    //     <h1>{mnemonic}</h1>
    //   </header>
    // </div>
    // Router test
    <Router>
        {/* <WALLET_AUTH /> */}
        {/* <WALLET_AUTH />  */}
        {/* <LOGIN /> */}
        <RECOVERY />
    </Router>
  );
}

export default App;

