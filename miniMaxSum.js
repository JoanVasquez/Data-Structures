let miniMaxSum = arr => {
  let sum = 0;
  let min = Infinity;
  let max = -Infinity;

  arr.forEach(item => {
    sum += item;
    min = item < min ? item : min;
    max = item > max ? item : max;
  });
  console.log(`${sum - max} ${sum - min}`);
};

miniMaxSum([1, 2, 3, 4, 5]);
