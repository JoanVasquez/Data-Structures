let aVeryBigSum = arr => {
  let total = 0;
  arr.forEach(item => (total += item));
  return total;
};

console.log(
  aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
);
