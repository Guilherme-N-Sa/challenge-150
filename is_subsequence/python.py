class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        j = 0

        for c in t:
            if j >= len(s):
                return True
            elif c == s[j]:
                j += 1

        return j == len(s)
