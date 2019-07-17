let isPermutation = A => {
  let seen = [];

  for (let i = 0; i < A.length; i++) {
    if (A[i] < 1 || A[i] > A.length) return 0;
    if (seen[A[i]] === true) return 0;
    else seen[A[i]] = true;
  }

  return 1;
};
