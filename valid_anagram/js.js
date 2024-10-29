/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let hash_s = {};
  let hash_t = {};

  for (let i = 0; i < s.length; i++) {
    hash_s[s[i]] = hash_s[s[i]] ? hash_s[s[i]] + 1 : 1;
    hash_t[t[i]] = hash_t[t[i]] ? hash_t[t[i]] + 1 : 1;
  }

  if (Object.keys(hash_s).length !== Object.keys(hash_t).length) return false;

  for (let key in hash_s) {
    if (hash_s[key] !== hash_t[key]) return false;
  }

  return true;
};
