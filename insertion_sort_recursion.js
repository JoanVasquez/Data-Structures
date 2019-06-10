let intArr = [20, 35, -15, 7, 55, 1, -22];
console.log(`Unsorted ===> ${intArr}`);

let insertionSort = (arr, numItems) => {
  if (numItems < 2) return;

  insertionSort(intArr, numItems - 1);

  let newElement = arr[numItems - 1];
  let i;

  for (i = numItems - 1; i > 0 && arr[i - 1] > newElement; i--) {
    arr[i] = arr[i - 1];
  }

  arr[i] = newElement;
};

insertionSort(intArr, intArr.length);
console.log(`Sorted ==> ${intArr}`);
