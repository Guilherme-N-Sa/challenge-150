from typing import List
import math


class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        nums.sort() # O(nlogn) Bad solution
        return nums[math.floor(len(nums) / 2)]
