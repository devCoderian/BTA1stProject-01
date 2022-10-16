import React from "react";

export const NetworkContext = React.createContext();
export const useContext = () => React.useContext(NetworkContext);
export function NetworkChange(Component) {
  const NetworkComponent = (props) => (
    <NetworkContext.Consumer>
      {(contexts) => <Component {...props} {...contexts} />}
    </NetworkContext.Consumer>
  );
  return WalletComponent;
}

const Network = ({ children }) => {
  const [network, setNetwork] = React.useState(null);

  const NetworkChange = (network) => {
    console.log("[networkChange]");
    setNetwork(network);
  };
  const getNetwork = () => {
    console.log("[getNetwork]");
    return network;
  };
  return (
    <NetworkContext.Provider
      value={{
        NetworkChange,
        getNetwork,
      }}
    >
      {children}
    </NetworkContext.Provider>
  );
};

export default Network;
