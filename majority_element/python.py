from typing import List


class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        # nums.sort() # O(nlogn) Bad solution
        # return nums[math.floor(len(nums) / 2)]

        count = 0
        candidate = None

        for num in nums:
            if count == 0:
                candidate = num
            count += 1 if num == candidate else -1

        return candidate
