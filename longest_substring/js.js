/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let i = 0
  let j = 0
  let set_map = new Set()
  let longest = 0

  while (j < s.length) {
      while (set_map.has(s[j])) {
          set_map.delete(s[i])
          i++
      }
      set_map.add(s[j])
      j++

      longest = Math.max(longest, set_map.size)

  }

  return longest
};