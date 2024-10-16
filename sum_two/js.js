/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  function justifySingleLine(words, maxWidth, char_count, last = false) {
    let number_of_spaces = words.length - 1;
    let spaces_to_distribute = maxWidth - char_count;
    let fixed = Math.floor(spaces_to_distribute / number_of_spaces);
    let remainder = spaces_to_distribute % number_of_spaces;

    let ret = "";

    if (words.length === 1 || last) {
      return (
        words.join(" ") + " ".repeat(maxWidth - char_count - number_of_spaces)
      );
    }

    for (let i = 0; i < words.length; i++) {
      if (i === 0) {
        ret += words[i];
      } else if (remainder >= i) {
        ret += " ".repeat(fixed + 1) + words[i];
      } else {
        ret += " ".repeat(fixed) + words[i];
      }
    }

    return ret;
  }

  let j = 0;
  let char_count = 0;
  let resp = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let word_l = word.length;

    if (char_count + word_l + i - j > maxWidth) {
      resp.push(justifySingleLine(words.slice(j, i), maxWidth, char_count));
      j = i;
      char_count = 0;
    }

    char_count += word_l;
  }
  resp.push(justifySingleLine(words.slice(j), maxWidth, char_count, true));

  return resp;
};
