class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        map_st = {}
        map_ts = {}

        for char_s, char_t in zip(s, t):
            if char_s not in map_st:
                map_st[char_s] = char_t
            elif map_st[char_s] != char_t:
                return False

            if char_t not in map_ts:
                map_ts[char_t] = char_s
            elif map_ts[char_t] != char_s:
                return False

        return True
