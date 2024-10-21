/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let upper_line = 1;
  let bottom_line = matrix.length - 1;
  let l_column = 0;
  let r_column = matrix[0].length - 1;

  let i = 0;
  let j = -1;

  let res = [];

  while (true) {
    while (j < r_column) {
      j++;
      res.push(matrix[i][j]);
      if (j === r_column) {
        r_column--;
      }
    }
    if (res.length === matrix.length * matrix[0].length) break;
    while (i < bottom_line) {
      i++;
      res.push(matrix[i][j]);
      if (i === bottom_line) {
        bottom_line--;
      }
    }
    if (res.length === matrix.length * matrix[0].length) break;
    while (j > l_column) {
      j--;
      res.push(matrix[i][j]);
      if (j === l_column) {
        l_column++;
      }
    }
    if (res.length === matrix.length * matrix[0].length) break;
    while (i > upper_line) {
      i--;
      res.push(matrix[i][j]);
      if (i === upper_line) {
        upper_line++;
      }
    }
    if (res.length === matrix.length * matrix[0].length) break;
  }
  return res;
};
