/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;

  let s_len = s.length;
  let aux = new Array(numRows)
    .fill(null)
    .map(() => new Array(s_len).fill(null));
  let i = 0;
  let i_increment = -1;
  let j = -1;

  for (let ss of s) {
    if (i_increment === -1) {
      j++;
    }
    aux[i][j] = ss;
    if (i === 0 || i === numRows - 1) {
      i_increment *= -1;
    }
    i += i_increment;
  }

  let resp = "";
  for (a of aux) {
    a.forEach((a) => {
      if (a) {
        resp += a;
      }
    });
  }

  return resp;
};
