import { atom } from "recoil";
import { StacksMainnet, StacksTestnet } from "@stacks/network";
const testnet = new StacksTestnet();
export const AddressInfo = atom({
  key: "AddressKey",
  default: "",
});
export const NetWorkInfo = atom({
  key: "NetWorkInfo",
  default: testnet,
});
export const UserBalanceInfo = atom({
  key: "UserBalanceInfo",
  default: 0,
});
export const RecipientInfo = atom({
  key: "RecipientInfo",
  default: "",
});
export const AmountInfo = atom({
  key: "AmountInfo",
  default: 0,
});
