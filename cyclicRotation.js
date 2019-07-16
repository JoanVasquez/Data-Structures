let cyclicRotation = (A, K) => {
  const min = 0;
  const max = 100;

  if (
    A.length >= min &&
    A.length <= max &&
    K === parseInt(K, 0) &&
    K >= min &&
    K <= max
  ) {
    K = A.length - (K % A.length);
    return [...A.slice(K), ...A.slice(0, K)];
  }

  return A;
};

console.log(cyclicRotation([1, 2, 3], 100));
