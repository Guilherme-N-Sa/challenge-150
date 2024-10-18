class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        i = 0
        cur = 0
        min_len = None
        for j in range(len(nums)):
            cur += nums[j]
            while cur >= target:
                min_len = j - i + 1 if not min_len else min(min_len, j - i + 1)
                cur -= nums[i]
                i += 1

        return min_len or 0
