from typing import List


class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        diff = {}
        for i in range(len(numbers)):
            if diff.get(numbers[i], None) != None:
                return [diff.get(numbers[i]) + 1, i + 1]
            diff[target - numbers[i]] = i
