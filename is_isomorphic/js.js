/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let len = s.length;
  let hash = {};
  for (let i = 0; i < len; i++) {
    if (!hash[t[i]]) {
      hash[t[i]] = s[i];
      continue;
    }

    if (hash[t[i]] !== s[i]) {
      return false;
    }
  }

  let set_s = new Set(Object.values(hash));
  return set_s.size === Object.keys(hash).length;
};
