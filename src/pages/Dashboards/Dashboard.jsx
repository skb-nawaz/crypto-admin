import React from 'react'
import CryptoIcons from '../../components/cryptoIcons/CryptoIcons'
import Navbar from '../../components/navbar/Navbar'
import Card from '../../components/card/Card'
import CryptocurrencyList from '../../components/cryptocurrencyList/CryptocurrencyList'
import "./style.css"

const Dashboard = () => {
  return (
    <div className='DashboardPage'>
      <Navbar/>
      <CryptoIcons/>
      <Card/>
      <CryptocurrencyList/>
    </div>
  )
}

export default Dashboard