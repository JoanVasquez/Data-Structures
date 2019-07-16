let birthdayCakeCandles = arr => {
  let highestCandle = Math.max(...arr);
  return arr.filter(item => item === highestCandle).length;
};

console.log(birthdayCakeCandles([3, 2, 1, 3]));
