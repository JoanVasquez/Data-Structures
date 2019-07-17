let missingInteger = A => {
  A = A.filter(current => {
    return current >= 0;
  }).sort((a, b) => {
    return a - b;
  });

  let min = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] - min > 1) return min + 1;
    if (A[i] - min === 1) min = A[i];
  }

  return min + 1;
};
