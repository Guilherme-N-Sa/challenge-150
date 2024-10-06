/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = strs.pop() || "";
  while (strs.length > 0) {
    let str = strs.pop();
    for (let c = 0; c < prefix.length; c++) {
      if (str[c] !== prefix[c]) {
        prefix = prefix.slice(0, c);
        break;
      }
    }
  }
  return prefix;
};
