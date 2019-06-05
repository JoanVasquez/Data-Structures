let intArr = [2, 5, 8, 2, 8, 7, 4, 3];
console.log(`Unsorted ${intArr}`);

function countingSort(arr, min, max) {
  var i,
    j = 0,
    count = [];
  for (i = min; i <= max; i++) {
    count[i] = 0;
  }
  for (i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }
  for (i = min; i <= max; i++) {
    while (count[i]-- > 0) {
      arr[j++] = i;
    }
  }
  return arr;
}

console.log(`Sorted ${countingSort(intArr, 1, 8)}`);
