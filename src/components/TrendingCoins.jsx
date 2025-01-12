import React, { useEffect, useState } from 'react';
import { getTrendingCoins } from '../api/api';

const TrendingCoins = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getTrendingCoins().then(data => setTrending(data.coins));
  }, []);

  if (!trending.length) return <p>Loading...</p>;

  return (
    <div>
      <h2>Trending Coins (24h)</h2>
      <ul>
        {trending.slice(0, 3).map((coin, index) => (
          <li key={index}>
            <img src={coin.item.thumb} alt={coin.item.name} />
            <p>{coin.item.name} ({coin.item.symbol})</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingCoins;
