import React from 'react';
import {Aragon,Ltc,Shib,Arb2,Usdt,DaiMono,Xrp2,BnbMono, Looks2,MaticMono,Btc2,Usdc,Ada,Eth,Dai,Doge,Matic,Bnb,Avax2,Cake} from 'react-web3-icons';
import './style.css'
import { AiFillAppstore} from 'react-icons/ai';


function CryptoIcons() {
  return (
    <div className='cryptoContainer'>
      <button className='btnstyle'>
      <div className='cryptoIconBox'>
      <AiFillAppstore style={{ fontSize: '1.5rem' }} />
      <p value="All">All</p>
    </div>
    </button>
    <button className='btnstyle'>
      <div className='cryptoIconBox'>
      <Btc2 style={{ fontSize: '1.5rem' }} />
      <p value="btc">Bitcoin</p>
    </div>
    </button>
    <button className='btnstyle'>
      <div className='cryptoIconBox'>
      <Ada style={{ fontSize: '1.5rem' }} />
      <p value="Ada">Ada</p>
    </div>
    </button>
    <button className='btnstyle'>
      <div className='cryptoIconBox'>
      <Eth style={{ fontSize: '1.5rem' }} />
      <p value="Eth">Eth</p>
    </div>
    </button>
    <button className='btnstyle'>
      <div className='cryptoIconBox'>
      <Dai style={{ fontSize: '1.5rem' }} />
      <p value="Dai">Dai</p>
    </div>
    </button>
    <button className='btnstyle'>
      <div className='cryptoIconBox'>
      <Doge style={{ fontSize: '1.5rem' }} />
      <p value="Doge">Doge</p>
    </div>
    </button>
    <button className='btnstyle'>
      <div className='cryptoIconBox'>
      <Usdc style={{ fontSize: '1.5rem' }} />
      <p value="Usdc">Usdc</p>
    </div>
    </button>
    <button className='btnstyle'>
      <div className='cryptoIconBox'>
      <Matic style={{ fontSize: '1.5rem' }} />
      <p value="Matic">Matic</p>
    </div>
    </button>
    <button className='btnstyle'>
      <div className='cryptoIconBox'>
      <Bnb style={{ fontSize: '1.5rem' }} />
      <p value="Bnb">Bnb</p>
    </div>
    </button>
    <button className='btnstyle'>
      <div className='cryptoIconBox'>
      <Avax2 style={{ fontSize: '1.5rem' }} />
      <p value="Avax2">Avax2</p>
    </div>
    </button>
    <button className='btnstyle'>
      <div className='cryptoIconBox'>
      <Shib style={{ fontSize: '1.5rem' }} />
      <p value="Shib">Shib</p>
    </div>
    </button>
    <button className='btnstyle'>
      <div className='cryptoIconBox'>
      <Arb2 style={{ fontSize: '1.5rem' }} />
      <p value="Arb2">Arb2</p>
    </div>
    </button>
    <button className='btnstyle'>
      <div className='cryptoIconBox'>
      <Ltc style={{ fontSize: '1.5rem' }} />
      <p value="Ltc">Ltc</p>
    </div>
    </button>
    <button className='btnstyle'>
      <div className='cryptoIconBox'>
      <Cake style={{ fontSize: '1.5rem' }} />
      <p value="Cake">Cake</p>
    </div>
    </button>
    <button className='btnstyle'>
      <div className='cryptoIconBox'>
      <Usdt style={{ fontSize: '1.5rem' }} />
      <p value="Usdt">Usdt</p>
    </div>
    </button>
    <button className='btnstyle'>
      <div className='cryptoIconBox'>
      <DaiMono style={{ fontSize: '1.5rem' }} />
      <p value="DaiMono">DaiMono</p>
    </div>
    </button>
    <button className='btnstyle'>
      <div className='cryptoIconBox'>
      <Looks2 style={{ fontSize: '1.5rem' }} />
      <p value="Looks2">Looks2</p>
    </div>
    </button>
    <button className='btnstyle'>
      <div className='cryptoIconBox'>
      <Aragon style={{ fontSize: '1.5rem' }} />
      <p value="Aragon">Aragon</p>
    </div>
    </button>
    <button className='btnstyle'>
      <div className='cryptoIconBox'>
      <MaticMono style={{ fontSize: '1.5rem' }} />
      <p value="MaticMono">MaticMono</p>
    </div>
    </button>
    <button className='btnstyle'>
      <div className='cryptoIconBox'>
      <BnbMono style={{ fontSize: '1.5rem' }} />
      <p value="BnbMono">BnbMono</p>
    </div>
    </button>
    <button className='btnstyle'>
      <div className='cryptoIconBox'>
      <Xrp2 style={{ fontSize: '1.5rem' }} />
      <p value="Xrp2">Xrp2</p>
    </div>
    </button>
    <button className='btnstyle'>
      <div className='cryptoIconBox'>
      <p value="showAll">Show All</p>
    </div>
    </button>
   </div>
  );
}

export default CryptoIcons;
