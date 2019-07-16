let rotate = (arr, order) => {
  if (!arr.length || order < 0) return;
  if (order > arr.length) parseInt((order %= arr.length));
};
