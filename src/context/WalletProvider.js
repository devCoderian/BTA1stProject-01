import React from 'react';

export const WalletContext = React.createContext();
export const useWallet = () => React.useContext(WalletContext);

export function withWallet(Component) {
    const WalletComponent = props => (
        <WalletContext.Consumer>
            {contexts => <Component {...props} {...contexts} />}
        </WalletContext.Consumer>
    );
    return WalletComponent;
}

const WalletProvider = () => {
    return null;
}

export default WalletProvider
