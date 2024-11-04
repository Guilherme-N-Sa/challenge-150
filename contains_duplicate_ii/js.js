/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let nums_set = new Set();

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (nums_set.has(num)) {
      return true;
    }
    nums_set.add(num);

    if (nums_set.size > k) {
      nums_set.delete(nums[i - k]);
    }
  }
  return false;
};
