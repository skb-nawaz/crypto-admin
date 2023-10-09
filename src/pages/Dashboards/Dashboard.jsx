import React from 'react'
import CryptoIcons from '../../components/cryptoIcons/CryptoIcons'
import Navbar from '../../components/navbar/Navbar'
import Card from '../../components/card/Card'
import CryptocurrencyList from '../../components/cryptocurrencyList/CryptocurrencyList'
import "./style.css"
import { useContext, useEffect, useState } from "react"
import { Context } from '../../index'
import axios from 'axios'
import { useQuery } from 'react-query'

const Dashboard = () => {
  const {coindata,setCoinData}=useContext(Context)
  return (
    <div className='DashboardPage'>
      <Navbar/>
      <CryptoIcons/>
      <Card/>
      <CryptocurrencyList coindata={coindata}/>
    </div>
  )
}

export default Dashboard