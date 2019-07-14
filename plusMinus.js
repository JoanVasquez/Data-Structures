let plusMinus = arr => {
  let positives = 0;
  let negatives = 0;
  let zeros = 0;

  const n = arr.length;

  if (n > 0 && n <= 100) {
    arr.forEach(item => {
      if (item > 0) positives++;
      else if (item < 0) negatives++;
      else zeros++;
    });
  }

  console.log(positives / n);
  console.log(negatives / n);
  console.log(zeros / n);
};

plusMinus([-4, 3, -9, 0, 4, 1]);
