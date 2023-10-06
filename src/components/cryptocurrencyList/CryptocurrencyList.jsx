import React from 'react';
import "./style.css"

const data = {
  cryptos: [
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'btc',
      image: null,
      currentPrice: '27560',
    },
    {
      id: 'ethereum',
      name: 'Ethereum',
      symbol: 'eth',
      image: null,
      currentPrice: '1618.22',
    },
    {
      id: 'tether',
      name: 'Tether',
      symbol: 'usdt',
      image: null,
      currentPrice: '0.998836',
    },
    {
      id: 'binancecoin',
      name: 'BNB',
      symbol: 'bnb',
      image: null,
      currentPrice: '211.24',
    },
    {
      id: 'ripple',
      name: 'XRP',
      symbol: 'xrp',
      image: null,
      currentPrice: '0.51962',
    },
    {
      id: 'usd-coin',
      name: 'USDC',
      symbol: 'usdc',
      image: null,
      currentPrice: '0.998352',
    },
    {
      id: 'staked-ether',
      name: 'Lido Staked Ether',
      symbol: 'steth',
      image: null,
      currentPrice: '1620.08',
    },
    {
      id: 'solana',
      name: 'Solana',
      symbol: 'sol',
      image: null,
      currentPrice: '22.82',
    },
    {
      id: 'cardano',
      name: 'Cardano',
      symbol: 'ada',
      image: null,
      currentPrice: '0.260098',
    },
    {
      id: 'dogecoin',
      name: 'Dogecoin',
      symbol: 'doge',
      image: null,
      currentPrice: '0.060892',
    },
  ],
};

const CryptocurrencyList = () => {
  const cryptos = data.cryptos;

  return (
    <div>
      {cryptos.map((crypto) => (
        <div className="crypto-container" key={crypto.id}>
          <div className="crypto-icon">
            <img src={crypto.image} alt={`${crypto.name} Icon`} />
          </div>
          <div className="crypto-details">
            <p className="crypto-name">{crypto.name}</p>
            <p className="crypto-balance">Balance: Your Balance</p>
            <p className="crypto-price">Price: {crypto.currentPrice}</p>
            <p className="crypto-assets">Assets: Your Assets</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CryptocurrencyList;
