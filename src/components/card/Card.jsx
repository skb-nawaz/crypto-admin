import React, { useState, useEffect } from 'react';
import "./style.css"

const Card = () => {
  const [netWorth, setNetWorth] = useState(0);

  useEffect(() => {
    const updateNetWorth = () => {
      const newValue = Math.floor(Math.random() * 1000000);
      setNetWorth(newValue);
    };

    const intervalId = setInterval(updateNetWorth, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='cardContainer'> 
    <div className="card">
      <h2 className='heading'>Net Worth</h2>
      <p className='value'>${netWorth.toLocaleString()}</p>
    </div>
    <div className="card">
      <h2 className='heading'>Total rewards</h2>
      <p className='value'>${netWorth.toLocaleString()}</p>
    </div>
    <div className="card">
      <h2 className='heading'>Total Assets</h2>
      <p className='value'>${netWorth.toLocaleString()}</p>
    </div>
    <div className="card">
      <h2 className='heading'>Total debts</h2>
      <p className='value'>${netWorth.toLocaleString()}</p>
    </div>
    </div>
  );
};

export default Card;
