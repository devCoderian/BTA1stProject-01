import React, { useEffect, useState } from "react";
import {
  generateSecretKey,
  generateWallet,
  generateNewAccount,
  getStxAddress,
} from "@stacks/wallet-sdk";
import sha256 from "sha256";
import storage from "../../utils/storage";
import styled from "styled-components";
import { goTo } from "react-chrome-extension-router";
import saltedSha256 from "salted-sha256";
import WALLET_HOME from "../../pages/Home/WALLET_HOME";
const ConfirmMenm = ({ params }) => {
  const [inputWords, setInpuWords] = useState([]);

  const [confirm, setConfirm] = useState([]);
  const [originalWords, setOriginalWords] = useState([]);
  const [randomWords, setRandomWords] = useState([]);

  useEffect(() => {
    let paramList = params.toString().split(",");
    setOriginalWords(paramList);
    let wordList = [];
    for (let i = 0; i < paramList.length; i++) {
      wordList.push({ word: paramList[i], toggle: false });
    }

    setRandomWords([...wordList].sort(() => Math.random() - 0.5));
  }, []);

  const goToNext = async () => {
    goTo(WALLET_HOME);
  };

  const compareArray = function (a, b) {
    if (JSON.stringify(a) == JSON.stringify(b)) {
      return true;
    } else {
      return false;
    }
  };

  const onSubmit = () => {
    console.log("inputWords", inputWords);
    console.log("originalWords", originalWords);

    if (compareArray(inputWords, originalWords)) {
      chrome.storage.local.get(["password"], function (result) {
        console.log(JSON.parse(result.password));
        generateWallet({
          secretKey: params.split(",").join(" "),
          password: result.password,
        }).then(async (res) => {
          // 비밀키 => res.stxPrivateKey;
          const saltedHashAsync = await saltedSha256(
            res.accounts[0].stxPrivateKey,
            result.password,
            true
          );
          console.log("saltedHashAsync", saltedHashAsync);
          const address = getStxAddress({ account: res.accounts[0] });
          console.log(address);
          storage.set("privateKey", saltedHashAsync);
          storage.set("address", address);

          goToNext();
        });
      });
    } else setConfirm(true);
  };
  return (
    <Container>
      <Warning>비밀번호 복구 단어의 순서를 맞춰주세요.</Warning>
      <Empty>
        {inputWords.map((item) => (
          <EmptyWord>{item}</EmptyWord>
        ))}
      </Empty>
      <WordList>
        {randomWords?.map((item, index) => {
          return (
            <>
              <Word
                toggle={item.toggle}
                key={item.word}
                onClick={() => {
                  console.log("toggle", item.toggle);
                  if (item.toggle) {
                    let filteredWord = inputWords.filter(
                      (word) => word !== item.word
                    );
                    console.log(filteredWord);
                    setInpuWords([...filteredWord]);
                    let copyArray = [...randomWords];
                    copyArray[index] = { ...copyArray[index], toggle: false };
                    setRandomWords(copyArray);
                  } else {
                    // setInpuWords([...inputWords, {
                    //     word: item.word,
                    //     toggle: true
                    // }]);
                    let arr = [...inputWords, item.word];
                    setInpuWords(arr);
                    // randomWords.map(data => {
                    //     if (data.word === item.word) {
                    //       data['toggle'] = false;
                    //       return data
                    //     } else {
                    //       return data
                    //     }
                    //   })
                    let copyArray = [...randomWords];
                    copyArray[index] = { ...copyArray[index], toggle: true };
                    setRandomWords(copyArray);
                  }
                }}
              >
                {item.word}
              </Word>
            </>
          );
        })}
      </WordList>
      {confirm === false && <Warning>니모닉 코드가 일치하지 않습니다.</Warning>}
      <Button onClick={onSubmit}>Next</Button>
    </Container>
  );
};

export default ConfirmMenm;

const Container = styled.div`
  width: 286px;
  margin: 0 auto;
`;

const Warning = styled.div`
  color: #9a0000;
  margin: 5px auto;
`;

const WordList = styled.div`
  width: 286px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  text-align: center;
`;

const Word = styled.div`
  width: 76px;
  height: 20px;
  margin-top: 10px;
  font-size: 12px;
  font-weight: 500;
  color: black;
  border-radius: 4px;
  border: 1px solid #a5a5a5;
  margin: 5px;
  padding: 2px;
  background-color: ${({ toggle }) => (toggle ? "#A5A5A5" : "white")};
`;

const EmptyWord = styled.div`
  padding-right: 4px;
`;
const Button = styled.button`
  border: 1px solid #000;
  border-radius: 10px;
  background-color: #000;
  width: 286px;
  height: 42px;
  color: #fff;
  margin-top: 18px;
  cursor: pointer;
`;

const Empty = styled.div`
  border: 1px solid #a5a5a5;
  border-radius: 10px;
  height: 80px;
  width: 286px;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  box-sizing: border-box;
`;
