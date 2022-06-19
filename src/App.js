import './App.css';
import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Coin from './Coin';

function App() {
  const [coins,setCoins]=useState([]);
  const [search,setSearch]=useState('');
  useEffect(()=>{
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false").then(res=>{
      setCoins(res.data);
    }).catch(error => console.log(error))
  });

    const handleChange= e =>{
      setSearch(e.target.value)
    }
    const filteredCoins=coins.filter(coin => {
      return (coin.name.toLowerCase().includes(search.toLowerCase()))
    }
      );

  return (
    <div className="App">
      <div className="coin-app">
        <div className="coin-search"></div>
        <h1 className="coin-text">Search a currency</h1>
        <form> 
          <input type="text" placeholder="Search" className="coin-input" onChange={handleChange}/>
        </form>
      </div>
      <div className="Coins-list">
          {filteredCoins.map(coin =>{
            return(
              <Coin key={coin.id} 
              name={coin.name} 
              image={coin.image} 
              symbol={coin.symbol} 
              market_cap={coin.market_cap}  
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              volume= {coin.total_volume}/>
            )
          }
          )
          }
      </div>
    </div>
  );
}

export default App;
