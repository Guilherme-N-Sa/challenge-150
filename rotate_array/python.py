from typing import List


class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        """
        This solution does not modify in-place - Bad

        new_arr = []

        for i in range(-k, len(nums) - k):
            new_arr.append(nums[i])
            print(new_arr)

        return new_arr
        """

        if k > len(nums):
            k = k % len(nums)

        aux = []

        for i in range(k):
            aux.append(nums[-(k - i)])

        for i in range(len(nums) - k - 1, -1, -1):
            nums[i + k] = nums[i]

        for i in range(len(aux)):
            nums[i] = aux[i]
