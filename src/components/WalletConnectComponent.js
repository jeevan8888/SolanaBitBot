// components/WalletConnectComponent.js
import React, { useState } from 'react';
import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers } from "ethers";

const WalletConnectComponent = () => {
  const [account, setAccount] = useState("");
  const [provider, setProvider] = useState(null);
  const [error, setError] = useState("");

  const connectWallet = async () => {
    try {
      const connector = new WalletConnectProvider({
        infuraId: "YOUR_INFURA_ID", // Replace with your Infura Project ID
      });

      // Enable session (triggers QR Code modal)
      await connector.enable();

      // Create a Web3 provider
      const web3Provider = new ethers.providers.Web3Provider(connector);

      // Get accounts
      const accounts = await web3Provider.listAccounts();
      setAccount(accounts[0]);
      setProvider(web3Provider);
    } catch (err) {
      console.error("Connection error", err);
      setError("Failed to connect to wallet. Please try again.");
    }
  };

  return (
    <div>
      <button onClick={connectWallet}>Connect Wallet</button>
      {account && <p>Connected Account: {account}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default WalletConnectComponent;