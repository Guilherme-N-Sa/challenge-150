/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = 0;
  prev = undefined;

  for (i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num !== prev) {
      prev = num;
      nums[k] = num;
      k++;
    }
  }

  return k;
};
