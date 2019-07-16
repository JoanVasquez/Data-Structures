let fibonacci = num => {
  let a = 1;
  let b = 0;
  let tmp;

  while (num >= 0) {
    tmp = a;
    a += b;
    b = tmp;
    num--;
  }

  return b;
};

console.log(fibonacci(5));
