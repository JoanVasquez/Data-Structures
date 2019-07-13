let hasDuplicate = arr => {
  return arr.some((value, index) => arr.indexOf(value, index + 1) !== -1);
};

console.log(hasDuplicate([2, 3, 4, 5]));
