import React from "react";
import styled from "styled-components";
import Header from "../../components/comn/Header";
import { useRecoilValue } from "recoil";
import { RecipientInfo, UserBalanceInfo } from "../../atom/atom";
import { AddressInfo } from "../../Atom/atom";
import {
  makeSTXTokenTransfer,
  broadcastTransaction,
  AnchorMode,
} from "@stacks/transactions";
const WALLET_SUMMARY = () => {
  const recipent = useRecoilValue(RecipientInfo);
  const crUserAddress = useRecoilValue(AddressInfo);
  const balance = useRecoilValue(UserBalanceInfo);
  const [recipientUser, SetRecipientUser] = useRecoilState(RecipientInfo);
  const [pv, setPv] = useState("");
  useState(() => {
    chrome.storage.local.get(["privateKey"], function (result) {
      console.log(JSON.parse(result.password));
      setPv(result.privateKey);
    });
  }, []);
  const sendToken = async () => {
    try {
      const txOptions = {
        recipient: recipientUser,
        amount: 12345n,
        senderKey: pv,
        network: "testnet", // for mainnet, use 'mainnet'
        memo: "test memo",
        nonce: 0n, // set a nonce manually if you don't want builder to fetch from a Stacks node
        fee: 200n, // set a tx fee if you don't want the builder to estimate
        anchorMode: AnchorMode.Any,
      };
      const transaction = await makeSTXTokenTransfer(txOptions);
      // to see the raw serialized tx
      const serializedTx = transaction.serialize().toString("hex");
      // broadcasting transaction to the specified network
      const broadcastResponse = await broadcastTransaction(transaction);
      const txId = broadcastResponse.txid;
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Container>
      <Header />
      <div>Summary</div>
      <SubContainer>
        <div>{balance}STX</div>
        <div>
          <div>
            <span>FROM</span>
            <span>{crUserAddress}</span>
          </div>
          <div>
            <span>TO</span>
            <span>{recipent}</span>
          </div>
        </div>
        <Btn onClick={sendToken}>Next</Btn>
      </SubContainer>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 360px;
  height: 600px;
  margin: 0 auto;
  margin-left: 30px;
`;
const SubContainer = styled.div`
  width: 330px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Btn = styled.button`
  background-color: black;
  width: 325px;
  height: 46px;
  margin: 30px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  text-decoration: none;
`;
export default WALLET_SUMMARY;
