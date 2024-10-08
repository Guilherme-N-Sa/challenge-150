from typing import List


class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:

        result = [1 for _ in range(len(nums))]

        num = 1
        for i in range(1, len(nums)):
            num = num * nums[i - 1]
            result[i] = num
        num = 1
        for i in range(len(nums) - 2, -1, -1):
            num = num * nums[i + 1]
            result[i] = result[i] * num

        return result
