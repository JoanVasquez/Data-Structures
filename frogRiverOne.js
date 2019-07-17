let frogRiveOne = (X, A) => {
  let sum = 0;
  let expected = (X * (X + 1)) / 2;
  let positions = [];

  for (let i in A) {
    let current = A[i];
    if (!positions[current]) {
      positions[current] = true;
      sum += current;
      if (sum === expected) return +i;
    }
  }

  return -1;
};
