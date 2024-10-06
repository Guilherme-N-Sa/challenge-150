class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        c = 0
        for i in range(len(s) - 1, -1, -1):
            if s[i] != " ":
                c += 1
                continue

            if c > 0:
                break

        return c
