let selectionSort = () => {
  let intArr = [20, 35, -15, 7, 55, 1, -22];
  console.log(`Unsorted ===> ${intArr}`);

  for (let lastUnsorted = intArr.length - 1; lastUnsorted > 0; lastUnsorted--) {
    let largest = 0;

    for (let i = 1; i <= lastUnsorted; i++) {
      if (intArr[i] > intArr[largest]) largest = i;
    }

    swap(intArr, largest, lastUnsorted);
  }

  console.log(`Sorted ===> ${intArr}`);
};

let swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

selectionSort();
