let isPrime = n => {
  let s = Math.floor(Math.sqrt(n));
  for (let i = 2; i <= s; i++) if (n % i === 0) return false;
  return n > 1;
};

console.log(isPrime(3));
