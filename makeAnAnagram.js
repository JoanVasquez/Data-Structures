let makeAnagram = (a, b) => {
  let count = {};
  a.split('').forEach(char => (count[char] = (count[char] || 0) + 1));
  b.split('').forEach(char => (count[char] = (count[char] || 0) - 1));
  return Object.keys(count).reduce((sum, key) => sum + Math.abs(count[key]), 0);
};
