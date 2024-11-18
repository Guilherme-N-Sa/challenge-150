/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  let max_i = board.length - 1;
  let max_j = board[0]?.length - 1;

  function _verifyCell(i, j) {
    let one_counter = 0;
    let current_cell = board[i][j];
    for (let ii = -1; ii <= 1; ii++) {
      if (ii === -1 && i === 0) continue;
      if (ii === 1 && i === max_i) continue;
      for (let jj = -1; jj <= 1; jj++) {
        if (jj === -1 && j === 0) continue;
        if (jj === 1 && j === max_j) continue;
        if (jj === ii && ii === 0) continue;
        if (board[i + ii][j + jj] === 1) {
          one_counter++;
        }
      }
    }
    if (current_cell === 1) {
      if (one_counter < 2 || one_counter > 3) {
        return 0;
      }
      return 1;
    } else {
      if (one_counter === 3) {
        return 1;
      }
      return 0;
    }
  }
  let resp = new Array(max_i + 1)
    .fill(0)
    .map((_) => new Array(max_j + 1).fill(0));
  for (let i = 0; i <= max_i; i++) {
    for (let j = 0; j <= max_j; j++) {
      resp[i][j] = _verifyCell(i, j);
    }
  }

  for (let i = 0; i <= max_i; i++) {
    for (let j = 0; j <= max_j; j++) {
      board[i][j] = resp[i][j];
    }
  }
};
