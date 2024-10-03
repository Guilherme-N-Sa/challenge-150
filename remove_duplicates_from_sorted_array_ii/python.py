from typing import List


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:

        k = 0

        for i in range(len(nums)):
            if k == 0 or nums[i] != nums[k - 1]:
                nums[k] = nums[i]
                k += 1

        return k
