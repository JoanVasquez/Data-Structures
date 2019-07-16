let catsAndMouse = (x, y, z) => {
  let xDist = Math.abs(x - z);
  let yDist = Math.abs(y - z);

  return xDist < yDist ? 'Cat A' : xDist > yDist ? 'Cat B' : 'Mouse C';
};
