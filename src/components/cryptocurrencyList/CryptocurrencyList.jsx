import React from 'react';
import "./style.css"
import { FaWallet } from 'react-icons/fa';


const CryptocurrencyList = (props) => {
  const {coindata}=props
  const cryptos = coindata?.data?.cryptos;
  console.log(cryptos)
 

  return (
    <div className="crypto-list">
      <div className="heading-container">
      <div className='inside-container' >
      <div className='wallet-container'>
      <FaWallet size={22} />
      <p>Wallet</p>
    </div>
    <div>
       <input
        type="checkbox"
        // style={{ display: 'none' }}
      />
      <span>Hide small balances</span>
    </div>
      </div>
      <div>
        <p>$5248.97</p>
      </div>
      </div>
      <div className='details-box'>
        <p className='heading1'>Assets</p>
        <p className='heading2'>CurrentPrice</p>
        <p className='heading3'>MarketCap</p>
        <p className='heading4'>TotalVolume</p>
      </div>
      <div className='map-components'>
        <div >      
          {cryptos?.map((crypto) => (
        <div className="crypto-container" key={crypto.id}>
          <div className="crypto-icon">
            <img src={crypto.image} alt={`${crypto.name} Icon`} />
            <div>
            <p className="crypto-name">{crypto.name}</p>
            <p className="crypto-name">exchange: Binance</p>
            </div>
          </div>
          <div className="crypto-details">
            <p className="crypto-balance">{crypto.currentPrice}</p>
            <p className="crypto-price">{crypto.marketCap}</p>
            <p className="crypto-assets">{crypto.totalVolume}</p>
          </div>
        </div>
        
      ))}
      </div>
      </div>
    </div>
  );
};

export default CryptocurrencyList;
