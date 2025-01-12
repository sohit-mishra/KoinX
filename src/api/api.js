import axios from 'axios';

const API_URL = 'https://api.coingecko.com/api/v3';

export const getBitcoinPrice = async () => {
  const response = await axios.get(`${API_URL}/simple/price`, {
    params: {
      ids: 'bitcoin',
      vs_currencies: 'inr,usd',
      include_24hr_change: 'true',
    },
  });
  return response.data;
};

export const getTrendingCoins = async () => {
  const response = await axios.get(`${API_URL}/search/trending`);
  return response.data;
};
