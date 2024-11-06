/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let resp = {};
  for (let str of strs) {
    let ordered_str = str.split("").sort().join("");
    resp[ordered_str] = [str, ...(resp[ordered_str] || [])];
  }

  return Object.values(resp);
};
