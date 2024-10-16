/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let j = 0;

  for (let c of t) {
    if (j >= t.length) return true;
    if (c === s[j]) {
      j++;
    }
  }

  return j === s.length;
};
