let binaryGap = n => {
  let maxGap = 0;
  let curMaxGap = 0;
  let binStr = n.toString(2);
  let i = binStr.length - 1;

  for (i; i >= 0; i--) if (binStr.charAt(i) !== '0') break;
  for (let j = i - 1; j >= 0; j--)
    if (binStr.charAt(j) === '0') curMaxGap += 1;
    else {
      if (curMaxGap > maxGap) maxGap = curMaxGap;
      curMaxGap = 0;
    }

  return maxGap;
};
