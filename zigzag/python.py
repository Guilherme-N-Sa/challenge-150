class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1:
            return s

        aux = ["" for _ in range(numRows)]
        i = 0
        increment = -1

        for char in s:
            aux[i] += char
            if i == 0 or i == (numRows - 1):
                increment *= -1

            i += increment

        return "".join(aux)
