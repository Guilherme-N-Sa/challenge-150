/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  function deleteWordFromMap(map, word) {
    const count = map.get(word);
    if (count === 1) {
      map.delete(word);
    } else {
      map.set(word, count - 1);
    }
  }

  if (words.length === 0 || s.length === 0) return [];

  const len_w = words[0].length;
  const total_len = len_w * words.length;
  const resp = [];

  const words_map = new Map();
  for (const word of words) {
    words_map.set(word, (words_map.get(word) || 0) + 1);
  }

  for (let i = 0; i <= s.length - total_len; i++) {
    const seen_words = new Map(words_map);
    let j = i;
    while (j < i + total_len) {
      const word = s.slice(j, j + len_w);

      if (seen_words.has(word)) {
        deleteWordFromMap(seen_words, word);
        if (seen_words.size === 0) {
          resp.push(i);
          break;
        }
      } else {
        break;
      }
      j += len_w;
    }
  }

  return resp;
};
