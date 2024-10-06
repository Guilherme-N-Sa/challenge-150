/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let c = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") {
      if (c > 0) break;
      continue;
    } else {
      c++;
    }
  }

  return c;
};
