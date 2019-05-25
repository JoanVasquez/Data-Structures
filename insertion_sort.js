let insertionSort = () => {
  let intArr = [20, 35, -15, 7, 55, 1, -22];
  console.log(`Unsorted ===> ${intArr}`);

  for (
    let firstUnsortedIndex = 1;
    firstUnsortedIndex < intArr.length;
    firstUnsortedIndex++
  ) {
    let newElement = intArr[firstUnsortedIndex];

    let i;

    for (i = firstUnsortedIndex; i > 0 && intArr[i - 1] > newElement; i--) {
      intArr[i] = intArr[i - 1];
    }

    intArr[i] = newElement;
  }
  console.log(`Sorted ===> ${intArr}`);
};

insertionSort();
