let permMissingElem = A => {
  if (A.length === 0) return 1;

  let actualSum = A.reduce((actualSum, index) => actualSum + index);
  let requiredSum = ((A.length + 1) * (A.length + 2)) / 2;

  return requiredSum - actualSum;
};
