/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (nums.length === 0) return [];

  let first = nums[0];
  let last = nums[0];
  let resp = [];

  for (let i = 1; i <= nums.length; i++) {
    if (nums[i] === undefined || nums[i] > last + 1) {
      if (first === last) {
        resp.push(`${first}`);
      } else {
        resp.push(`${first}->${last}`);
      }
      first = nums[i];
    }
    last = nums[i];
  }
  return resp;
};
