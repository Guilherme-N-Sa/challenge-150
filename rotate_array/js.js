/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length;

  function invert(start, end, nums) {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }

  invert(0, nums.length - 1, nums);
  invert(0, k - 1, nums);
  invert(k, nums.length - 1, nums);
};
