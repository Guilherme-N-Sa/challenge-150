Problem: Rotate Array
Given an integer array nums, rotate the array to the right by k steps, where k is a non-negative number.

Example 1:
Input:
nums = [1, 2, 3, 4, 5, 6, 7], k = 3
Output:
[5, 6, 7, 1, 2, 3, 4]
Explanation:
After 1 step: [7, 1, 2, 3, 4, 5, 6]
After 2 steps: [6, 7, 1, 2, 3, 4, 5]
After 3 steps: [5, 6, 7, 1, 2, 3, 4]
Example 2:
Input:
nums = [-1, -100, 3, 99], k = 2
Output:
[3, 99, -1, -100]
Explanation:
After 1 step: [99, -1, -100, 3]
After 2 steps: [3, 99, -1, -100]
Constraints:
1 <= nums.length <= 10^5
-2^31 <= nums[i] <= 2^31 - 1
0 <= k <= 10^5