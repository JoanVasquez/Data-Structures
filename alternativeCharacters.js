let alternativeCharacters = word => {
  let res = 0;

  if (word.length > 1) {
    let characters = word.split('');
    let pastCharacter = characters[0];

    characters = characters.filter((item, index) => {
      if (item !== pastCharacter && index !== 0) {
        pastCharacter = item;
        return item;
      }
    });

    res = word.length - [word.charAt(0), ...characters].length;
  }

  return res;
};

console.log(alternativeCharacters('ABB'));
