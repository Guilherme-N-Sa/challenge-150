/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let i = 0;
  let words = [];
  let curr = "";

  while (i <= s.length) {
    if (s[i] === " " || i === s.length) {
      if (curr.length > 0) {
        words.push(curr);
      }
      curr = "";
    } else {
      curr += s[i];
    }
    i++;
  }

  let left = 0;
  let right = words.length - 1;

  while (left < right) {
    [words[left], words[right]] = [words[right], words[left]];
    left++;
    right--;
  }

  return words.join(" ");
};
