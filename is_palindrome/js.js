/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase();

  function isAlNum(c) {
    if (
      c.charCodeAt(0) >= "a".charCodeAt(0) &&
      c.charCodeAt(0) <= "z".charCodeAt(0)
    ) {
      return true;
    }
    if (
      c.charCodeAt(0) >= "0".charCodeAt(0) &&
      c.charCodeAt(0) <= "9".charCodeAt(0)
    ) {
      return true;
    }
    return false;
  }

  let [left, right] = [0, s.length - 1];

  while (left < right) {
    if (!isAlNum(s[left])) {
      left++;
      continue;
    } else if (!isAlNum(s[right])) {
      right--;
      continue;
    }
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
