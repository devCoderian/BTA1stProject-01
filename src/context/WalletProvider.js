import React from 'react';

export const WalletContext = React.createContext();
export const useContext = () => React.useContext(WalletContext);

export function withWallet(Component) {

    const WalletComponent = props => (
        <WalletContext.Consumer>
            {contexts => <Component {...props} {...contexts} />}
        </WalletContext.Consumer>
    );
    return WalletComponent;
}

const WalletProvider = ({ children }) => {

    
    const [account, setAccount] = React.useState(null);

    const AccountChange = (account) => {
        console.log("[AccountChange]")
        setAccount(account);
    }
    const getAccount= () => {
        console.log("[getAccount]")
        return account;
    }
    
    return (
        <WalletContext.Provider
        value={{
            AccountChange,
            getAccount
        }}
    >
        {children}
    </WalletContext.Provider>
    )
}

export default WalletProvider