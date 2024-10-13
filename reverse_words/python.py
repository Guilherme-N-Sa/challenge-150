class Solution:
    def reverseWords(self, s: str) -> str:
        s_arr = [a for a in s.split(" ") if len(a) > 0]

        left = 0
        right = len(s_arr) - 1

        while left < right:
            s_arr[left], s_arr[right] = s_arr[right], s_arr[left]
            left += 1
            right -= 1

        return " ".join(s_arr)
