let stockAndCount = arr => {
  let pairs = 0;

  const colors = arr.reduce((quantity, value) => {
    quantity[value] ? (quantity[value] += 1) : (quantity[value] = 1);
    return quantity;
  }, {});

  Object.keys(colors).forEach(n => {
    let pairsResult = parseInt(colors[n] / 2);
    if (pairsResult >= 1) pairs += pairsResult;
  });

  return pairs;
};

console.log(stockAndCount([10, 20, 20, 10, 10, 30, 50, 10, 20]));
