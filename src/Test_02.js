
import React, {useState} from 'react';
import {
    goBack
  } from 'react-chrome-extension-router';
const Test_02 = () => {
    return (
        <div className="App">
            <header className="App-header" onClick={() => goBack()}>
                페이지 이동
            </header>
        </div>
        )
}
    export default Test_02;