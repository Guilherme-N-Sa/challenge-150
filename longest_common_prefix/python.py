from typing import List


class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:

        prefix = strs[0]

        for s in strs:
            if s == prefix:
                continue

            for c in range(len(prefix)):
                if (c == len(s)) or prefix[c] != s[c]:
                    prefix = prefix[0:c]
                    break

        return prefix
