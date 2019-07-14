let stairCase = n => {
  for (let i = 1; i <= n; i++) {
    let blanks = [...Array(n - i)].map(() => " ");
    let hashes = [...Array(n - (n - i))].map(() => "#");

    console.log([...blanks, ...hashes].join(""));
  }
};

stairCase(6);
