class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        i = 0
        resp = []
        nums.sort()

        while i < len(nums):
            left = i + 1
            right = len(nums) - 1

            while left < right:
                _sum = nums[i] + nums[left] + nums[right]
                if _sum == 0:
                    resp.append([nums[i], nums[left], nums[right]])
                    left += 1
                    right -= 1
                    while left < right and nums[left] == nums[left - 1]:
                        left += 1
                    while left < right and nums[right] == nums[right + 1]:
                        right -= 1
                elif _sum < 0:
                    left += 1
                else:
                    right -= 1

            i += 1
            while i < len(nums) and nums[i] == nums[i - 1]:
                i += 1

        return resp
