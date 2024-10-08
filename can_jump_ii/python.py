from typing import List

class Solution:
    def jump(self, nums: List[int]) -> int:
        if len(nums) <= 1:
            return 0

        current = 0
        farthest = 0
        count = 0

        for i in range(len(nums)):
            if nums[i] + i >= farthest:
                farthest = nums[i] + i

            if current == i:
                current = farthest
                count += 1
                if current >= len(nums) - 1:
                    break

        return count
