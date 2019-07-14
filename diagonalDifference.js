let diagonalDifference = arr => {
  let n = arr.length;
  let firstDiagonal = 0;
  let secondDiagonal = 0;

  for (let i = 0; i < n; i++) {
    firstDiagonal += arr[i][i];
    secondDiagonal += arr[i][n - i - 1];
  }

  return Math.abs(firstDiagonal - secondDiagonal);
};
