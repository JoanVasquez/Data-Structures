let removeVowels = arr => {
  return arr.map(word => word.replace(/[aeiouAEIOU]/g, ""));
};

console.log(removeVowels(["joan"]));
