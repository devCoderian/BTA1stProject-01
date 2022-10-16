import React, {useState} from 'react';
import {
    goBack,
    goTo,
    popToTop,
    Link,
    Router,
    getCurrent,
    getComponentStack,
  } from 'react-chrome-extension-router';
import Test_02 from './Test_02';

const Test = () => {
    return(
        <Link component={Test_02} props={{ message: 'I came from component one!' }}>
            Test
        </Link>
    )
}
export default Test;