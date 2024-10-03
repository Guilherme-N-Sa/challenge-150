from typing import List


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:

        removed = 0 # Number of elements removed.

        for i in range(len(nums)):
            if i <= 1:
                continue

            nums[i - removed] = nums[i]

            if nums[i] == nums[i - 2 - removed]:
                removed += 1

        return len(nums) - removed
