let subArraySum = (arr, n, sum) => {
  let currentSum = arr[0];
  let startIndex = 0;

  for (let i = 1; i <= n; i++) {
    while (currentSum > sum && startIndex < i - 1) {
      currentSum -= arr[startIndex];
      startIndex++;
    }

    if (currentSum == sum) {
      console.log(`${startIndex} ${i - 1}`);
      return;
    }
    if (i < n) currentSum += arr[i];
  }
};

var input_array = [1, 3, 8, 9, 11, 13, 17, 21];
subArraySum(input_array, input_array.length, 28);
