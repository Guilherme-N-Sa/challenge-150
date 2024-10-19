def is_valid_sudoku(board):
    def validate_nine(arr):
        arr = [a for a in arr if a != "."]
        return len(arr) == len(set(arr))

    for i in range(9):
        columns = []
        squares = []
        row_start = (i // 3) * 3
        col_start = (i % 3) * 3

        for j in range(9):
            columns.append(board[j][i])
            row = row_start + (j // 3)
            col = col_start + (j % 3)
            squares.append(board[row][col])

        if (
            not validate_nine(board[i])
            or not validate_nine(columns)
            or not validate_nine(squares)
        ):
            return False

    return True
