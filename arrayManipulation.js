let arrayManipulation = queries => {
  let arr = new Array(2 * n).fill(0);
  let max = 0;

  queries.forEach(item => {
    arr[item[0]] += item[2];
    arr[item[1] + 1] -= item[2];
  });

  arr.reduce((prev, curr, idx) => {
    const sum = prev + curr;
    if (sum > max) max = sum;
    return sum;
  });

  return max;
};
