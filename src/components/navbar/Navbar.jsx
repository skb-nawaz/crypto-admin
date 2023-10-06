import React, { useState } from 'react';
import './style.css';

const Navbar = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <div className="navbar__logo">DASHBOARD</div>
      </div>
      <div className="navbar__right">
        <button
          className={`navbar__button ${selectedButton === 'Portfolio' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('Portfolio')}
        >
          Portfolio
        </button>
        <button
          className={`navbar__button ${selectedButton === 'History' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('History')}
        >
          History
        </button>
        <button
          className={`navbar__button ${selectedButton === 'Analytics' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('Analytics')}
        >
          Analytics
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
