let rotate = (arr, order) => {
  if (!arr.length || order < 0) return;
  if (order > arr.length) Math.floor((order %= arr.length));

  let a = Math.round(arr.length - order);

  reverse(arr, 0, a - 1);
  reverse(arr, a, arr.length - 1);
  reverse(arr, 0, arr.length - 1);

  return arr;
};

let reverse = (arr, left, right) => {
  if (arr.length === 1) return;

  while (left < right) {
    let tmp = arr[left];
    arr[left] = arr[right];
    arr[right] = tmp;
    left++;
    right--;
  }
};

console.log(rotate([0, 1, 2, 3, 4, 5, 6], 3));
