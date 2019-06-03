let intArr = [20, 35, -15, 7, 55, 1, -22];
console.log(`Unsorted ===> ${intArr}`);

let quickSort = (arr, left, right) => {
  let pivot, index;

  if (left < right) {
    pivot = right;
    index = partition(arr, pivot, left, right);

    quickSort(arr, left, index - 1);
    quickSort(arr, index + 1, right);
  }

  return arr;
};

let partition = (arr, pivot, left, right) => {
  let pivotVal = arr[pivot];
  let index = left;

  for (let i = left; i < right; i++) {
    if (arr[i] < pivotVal) {
      swap(arr, i, index);
      index++;
    }
  }

  swap(arr, right, index);

  return index;
};

let swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

console.log(`Sorted ===> ${quickSort(intArr, 0, intArr.length - 1)}`);
