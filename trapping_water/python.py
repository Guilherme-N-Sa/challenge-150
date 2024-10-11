from typing import List


class Solution:
    def trap(self, height: List[int]) -> int:
        land = 0
        water = 0
        i = 0
        j = 1

        while j < len(height):
            if height[j] >= height[i]:
                water += (j - i - 1) * min(height[i], height[j]) - land
                land = 0
                i = j
            else:
                land += height[j]
            j += 1

        land = 0
        max_i = i
        j = len(height) - 1
        i = j - 1
        while i >= max_i:

            if height[i] >= height[j]:
                water += (j - i - 1) * min(height[i], height[j]) - land
                land = 0
                j = i
            else:
                land += height[i]
            i -= 1

        return water
