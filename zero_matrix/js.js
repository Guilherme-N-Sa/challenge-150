/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let zero_line = new Set();
  let zero_col = new Set();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        zero_line.add(i);
        zero_col.add(j);
      }
    }
  }

  for (let line of zero_line) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[line][j] = 0;
    }
  }

  for (let col of zero_col) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][col] = 0;
    }
  }
};
