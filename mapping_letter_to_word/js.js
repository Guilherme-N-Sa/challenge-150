/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  s = s.split(" ");
  if (pattern.length !== s.length) return false;

  let hashmap = {};
  for (let c = 0; c < pattern.length; c++) {
    char = pattern[c];
    if (hashmap[char]) {
      if (!(hashmap[char] === s[c])) {
        return false;
      }
    } else {
      hashmap[char] = s[c];
    }
  }

  let value_set = new Set(Object.values(hashmap));
  return Object.keys(hashmap).length === value_set.size;
};
