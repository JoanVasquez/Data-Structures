let oddOccurrencesInArray = A => {
  let res = 0;
  A.forEach(item => (res ^= item));
  return res;
};
