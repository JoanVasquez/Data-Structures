let intArr = [20, 35, -15, 7, 55, 1, -22];
console.log(`Unsorted ===> ${intArr}`);

let mergeSort = arr => {
  if (arr.length === 1) return arr;
  const middle = Math.round(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

let merge = (left, right) => {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
};

console.log(`Sorted ==> ${mergeSort(intArr)}`);
