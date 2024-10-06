/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let n = 0;
  let d = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  for (let i = s.length - 1; i >= 0; i--) {
    if (i === 0 || d[s[i]] <= d[s[i - 1]]) {
      n += d[s[i]];
    } else {
      n += d[s[i]] - d[s[i - 1]];
      i--;
    }
  }

  return n;
};
