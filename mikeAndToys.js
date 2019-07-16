let maximumToys = (prices, k) => {
  prices.sort();
  let sum = 0;

  for (let i = 0; i < prices.length; i++) {
    sum += prices[i];
    if (sum > k) return i;
  }

  return prices.length;
};
