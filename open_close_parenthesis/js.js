/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = new Array();
  let hashmap = { "(": ")", "{": "}", "[": "]" };

  for (let c of s) {
    if (c in hashmap) {
      stack.push(c);
    } else {
      let last_opening = stack.pop();
      if (!(hashmap[last_opening] === c)) return false;
    }
  }

  return stack.length === 0;
};
