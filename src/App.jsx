import { Route ,Routes} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboards/Dashboard";
import AppTools from "./pages/apptools/AppTools";
import BugReport from "./pages/bugreport/BugReport";
import Help from "./pages/help/Help";
import NFT from "./pages/nft/NFT";
import Profile from "./pages/profile/Profile";
import Settings from "./pages/settings/Settings";
import "./app.css"
import { useContext, useState } from "react";
import { useEffect } from "react";
import { Context } from "./index";

function App() {

  const {coindata,setCoinData} = useContext(Context);

  const LAUNCHES_QUERY=`{
    cryptos{
      id
      name
      symbol
      image
      currentPrice
      marketCap
      totalVolume }
    }`

  useEffect(()=>{
    fetch('https://crypto-graphql.onrender.com/cryptoData',{
      method:'POST',
      headers:{"content-type":"application/json"},
      body:JSON.stringify({query:LAUNCHES_QUERY})
    }).then(response=>response.json())
    .then(data=>setCoinData(data))

  },[]);
  

  return (
    <div className="app">
      <Sidebar/>
      <main className="content">
        <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/profile" element={<Profile/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/nft" element={<NFT/>} />
        <Route path="/app-tools" element={<AppTools/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/help" element={<Help/>} />
        <Route path="/bug-report" element={<BugReport/>} />
        </Routes>
      </main>
    </div>
  
  );
}

export default App;
