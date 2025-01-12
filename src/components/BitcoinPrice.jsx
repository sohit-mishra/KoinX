import React, { useEffect, useState } from 'react';
import { getBitcoinPrice } from '../api/api';

const BitcoinPrice = () => {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    getBitcoinPrice().then(data => setPrice(data.bitcoin));
  }, []);

  if (!price) return <p>Loading...</p>;

  return (
    <div>
      <h2>Bitcoin Price</h2>
      <p>INR: {price.inr}</p>
      <p>USD: {price.usd}</p>
      <p>24h Change: {price.usd_24h_change.toFixed(2)}%</p>
    </div>
  );
};

export default BitcoinPrice;
