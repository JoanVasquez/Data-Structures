let isIsomorphic = (s, t) => {
  if (s.length !== t.length) return false;

  let map1 = {};
  let map2 = {};

  for (let i = 0; i < s.length; i++) {
    let c1 = s.charAt(i);
    let c2 = t.charAt(i);

    if (c1 in map1) {
      if (map1[c1] !== c2) return false;
    } else {
      if (c2 in map2) return false;

      map1[c1] = c2;
      map2[c2] = c1;
    }
  }

  return true;
};

console.log(isIsomorphic("egg", "add"));
