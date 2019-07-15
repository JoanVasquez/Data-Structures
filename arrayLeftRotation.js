let arrayLeftRotation = (arr, d) => {
  return arr.concat(arr.splice(0, d));
};
