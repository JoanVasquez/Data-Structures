let frogJump = (X, Y, D) => {
  let distance = Y - X;
  return distance % D === 0 ? distance / D : parseInt(distance / D + 1);
};

console.log(frogJump(10, 85, 30));
