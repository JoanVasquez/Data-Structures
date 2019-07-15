let shouldSwap = arr => {
  return arr.length > 1;
};

let minSwaps = arr => {
  if (!shouldSwap(arr)) return;

  let minSwapsCount = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (i < arr[i] - 1) {
      minSwapsCount++;
      i--;
    }
  }

  return minSwapsCount;
};

console.log(minSwaps([4, 3, 1, 2]));
