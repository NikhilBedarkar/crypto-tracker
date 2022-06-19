import React from 'react'

const Coin = ({name,symbol,price,volume,image,priceChange,market_cap}) => {
  return (
    <div className="coin-container">
        <div className="coin-row">
        <div className="coin">
            <img src={image} alt="crypto" />
            <h1>{name}</h1>
            <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
            <p className="coin-price">INR {price.toLocaleString()}</p>
            <p className="coin-volume">{volume.toLocaleString()}</p>
            {priceChange < 0 ? (<p className="coin-percent red">{priceChange.toFixed(2)} %</p>) : (<p className="coin-percent green">{priceChange.toFixed(2)} %</p>)}
            <p className="coin-market_cap">Market cap : {market_cap}</p>
        </div>
        </div>
        
    </div>
  )
}

export default Coin