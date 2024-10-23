/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let len = matrix.length;
  let layers = Math.floor(len / 2);

  for (let n = 0; n < layers; n++) {
    for (let m = 0; m < len - 1 - 2 * n; m++) {
      let left = n;
      let right = len - 1 - n;
      let top = n;
      let bottom = len - 1 - n;

      let aux = matrix[top][left + m];
      matrix[top][left + m] = matrix[bottom - m][left];
      matrix[bottom - m][left] = matrix[bottom][right - m];
      matrix[bottom][right - m] = matrix[top + m][right];
      matrix[top + m][right] = aux;
    }
  }
};
