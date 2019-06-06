let shellSort = () => {
  let intArr = [20, 35, -15, 7, 55, 1, -22];
  console.log(`Unsorted ===> ${intArr}`);

  for (
    let gap = Math.floor(intArr.length / 2);
    gap > 0;
    Math.floor((gap /= 2))
  ) {
    for (let i = gap; i < intArr.length; i++) {
      let newElement = intArr[i];
      let j = i;

      while (j >= gap && intArr[j - gap] > newElement) {
        intArr[j] = intArr[j - gap];
        j -= gap;
      }

      intArr[j] = newElement;
    }
  }

  console.log(`Sorted ===> ${intArr}`);
};

shellSort();
