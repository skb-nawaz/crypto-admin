import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from "react";
import { createContext } from 'react'


export const Context = createContext({coindata:{}})

const AppWraper =()=>{
  const [coindata,setCoinData]=useState([])
  return (
  <Context.Provider value={{
    coindata,setCoinData
  }}>
      <App/>
      
  </Context.Provider>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AppWraper/>
    </BrowserRouter>
  </React.StrictMode>
);

