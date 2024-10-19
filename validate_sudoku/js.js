/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  function validateNine(arr) {
    arr = arr.filter((a) => a !== ".");
    let arr_set = new Set(arr);
    return arr_set.size === arr.length;
  }

  for (let i = 0; i < 9; i++) {
    let columns = [];
    for (let j = 0; j < 9; j++) {
      columns.push(board[j][i]);
    }

    let squares = [];
    for (let k = 0; k < 3; k++) {
      let line = Math.floor(i / 3) * 3;
      let col = k + (i % 3) * 3;
      squares.push(board[line][col]);
      squares.push(board[line + 1][col]);
      squares.push(board[line + 2][col]);
    }

    let rows = validateNine(board[i]); // validating rows
    let cols = validateNine(columns); // validating cols
    let squa = validateNine(squares); // validating squares

    if (!rows || !cols || !squa) {
      return false;
    }
  }
  return true;
};
