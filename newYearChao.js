let solution = arr => {
  if (!anyBrided(arr)) return;

  let chaotic = false;
  let bribed = 0;

  arr.forEach((item, index) => {
    if (item - (index + 1) > 2) {
      chaotic = true;
      return;
    }
    for (let j = Math.max(0, item - 2); j < index; j++)
      if (arr[j] > item) bribed++;
  });

  if (chaotic) console.log('Too Chaotic');
  else console.log(bribed);
};

let anyBrided = arr => {
  return arr.length > 1;
};
