let isPalindrome = word => {
  word = word.toLowerCase();
  let strLen = word.length;

  for (let i = 0; i < strLen; i++)
    if (word[i] !== word[strLen - i - 1]) return false;

  return true;
};

console.log(isPalindrome("racecar"));
