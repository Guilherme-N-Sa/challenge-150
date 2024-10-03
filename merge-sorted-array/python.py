from typing import List


class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        i = m - 1
        j = n - 1 
        k = m + n - 1

        while i >= 0 and j >= 0:
            if nums1[i] >= nums2[j]:
                nums1[k] = nums1[i]
                i -= 1
            else:
                nums1[k] = nums2[j]
                j -= 1
            k -= 1

        return nums1


sol = Solution()
print(sol.merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))  # [1,2,2,3,5,6]
print(sol.merge([1], 1, [], 0))  # [1]
