/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let hash_map = {};

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    if (current in hash_map) {
      return [hash_map[current], i];
    }

    let dif = target - current;
    hash_map[dif] = i;
  }
};
