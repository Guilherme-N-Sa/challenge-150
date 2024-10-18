/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let i = 0;
  let j = 0;
  let cur = 0;
  let min_sub_len = Infinity;

  while (j < nums.length) {
    cur += nums[j];
    j++;
    while (cur >= target) {
      min_sub_len = Math.min(min_sub_len, j - i);
      cur -= nums[i];
      i++;
    }
  }
  return min_sub_len === Infinity ? 0 : min_sub_len;
};
