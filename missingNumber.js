let getMissingNumbers = (arr, highestNum) => {
  if (arr.length < 0) return 1;
  let { min, max } = { min: Math.min(...arr), max: Math.max(...arr) };
  let missingNums = Array.from(
    Array(max - min),
    (value, index) => index + min
  ).filter(index => !arr.includes(index));

  return missingNums;
};

let arr = [1, 2, 3, 5];
console.log(getMissingNumbers(arr, Math.max(...arr)));
