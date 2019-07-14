let removeVowels = arr => {
  return arr.map(word => word.replace(/[aeiouAEIOU]/g, ""));
};

console.log(
  removeVowels([
    "bongo drums",
    "guitar",
    "flute",
    "double bass",
    "xylophone",
    "piano"
  ])
);
