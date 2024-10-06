class Solution:
    def romanToInt(self, s: str) -> int:
        d = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000,
        }

        c = 0

        i = len(s) - 1

        while i >= 0:
            if i == 0 or d[s[i]] <= d[s[i - 1]]:
                c += d[s[i]]
            else:
                c += d[s[i]] - d[s[i - 1]]
                i -= 1
            i -= 1

        return c
