class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        i, j = 0, 0
        long = 0
        hash_c = set()

        while j < len(s):
            while s[j] in hash_c:
                hash_c.remove(s[i])
                i += 1
            hash_c.add(s[j])
            j += 1

            long = max(long, len(hash_c))

        return long
