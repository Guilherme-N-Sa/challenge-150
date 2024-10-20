from typing import List


class Solution:
    def canJump(self, nums: List[int]) -> bool:

        i = 0

        while i < len(nums):
            num = nums[i]

            if num == 0:
                return False
            elif i + num >= len(nums) - 1:
                return True

            better_jump = [0, None]
            for j in range(num):
                print("i", i, "|| j", j, "|| nums[i + j + 1]", nums[i + j + 1])
                if better_jump[0] <= nums[i + j + 1] + j:
                    better_jump[0] = nums[i + j + 1] + j
                    better_jump[1] = i + j + 1

            i = better_jump[1]

        return True


sol = Solution()
print(sol.canJump([2, 3, 1, 1, 4]))  # True
# [2,0,6,9,8,4,5,0,8,9,1,2,9,6,8,8,0,6,3,1,2,2,1,2,6,5,3,1,2,2,6,4,2,4,3,0,0,0,3,8,2,4,0,1,2,0,1,4,6,5,8,0,7,9,3,4,6,6,5,8,9,3,4,3,7,0,4,9,0,9,8,4,3,0,7,7,1,9,1,9,4,9,0,1,9,5,7,7,1,5,8,2,8,2,6,8,2,2,7,5,1,7,9,6]
print(
    sol.canJump(
        [
            2,
            0,
            6,
            9,
            8,
            4,
            5,
            0,
            8,
            9,
            1,
            2,
            9,
            6,
            8,
            8,
            0,
            6,
            3,
            1,
            2,
            2,
            1,
            2,
            6,
            5,
            3,
            1,
            2,
            2,
            6,
            4,
            2,
            4,
            3,
            0,
            0,
            0,
            3,
            8,
            2,
            4,
            0,
            1,
            2,
            0,
            1,
            4,
            6,
            5,
            8,
            0,
            7,
            9,
            3,
            4,
            6,
            6,
            5,
            8,
            9,
            3,
            4,
            3,
            7,
            0,
            4,
            9,
            0,
            9,
            8,
            4,
            3,
            0,
            7,
            7,
            1,
            9,
            1,
            9,
            4,
            9,
            0,
            1,
            9,
            5,
            7,
            7,
            1,
            5,
            8,
            2,
            8,
            2,
            6,
            8,
            2,
            2,
            7,
            5,
            1,
            7,
            9,
            6,
        ]
    )
)  # True
