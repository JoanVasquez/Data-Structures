let findLargestNum = arr => {
  let largest = arr[0];

  arr.forEach(item => {
    if (largest < item) largest = item;
  });

  return largest;
};

let arr = [3, 6, 2, 56, 32, 5, 89, 32];
console.log(findLargestNum(arr));
