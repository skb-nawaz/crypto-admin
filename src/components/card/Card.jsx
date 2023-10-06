import React, { useState, useEffect } from 'react';
import "./style.css"

const Card = () => {
  const [netWorth, setNetWorth] = useState(0);

  // Simulate dynamic value changes using useEffect
  useEffect(() => {
    const updateNetWorth = () => {
      // Generate a random net worth value (for demonstration purposes)
      const newValue = Math.floor(Math.random() * 1000000); // Change this as needed
      setNetWorth(newValue);
    };

    // Update the net worth value every 3 seconds (for demonstration purposes)
    const intervalId = setInterval(updateNetWorth, 3000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='cardContainer'> 
    <div className="card">
      <h2 className='heading'>Net Worth</h2>
      <p className='value'>${netWorth.toLocaleString()}</p>
    </div>
    <div className="card">
      <h2 className='heading'>Net Worth</h2>
      <p className='value'>${netWorth.toLocaleString()}</p>
    </div>
    <div className="card">
      <h2 className='heading'>Net Worth</h2>
      <p className='value'>${netWorth.toLocaleString()}</p>
    </div>
    <div className="card">
      <h2 className='heading'>Net Worth</h2>
      <p className='value'>${netWorth.toLocaleString()}</p>
    </div>
    </div>
  );
};

export default Card;
