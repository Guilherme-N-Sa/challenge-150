/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let nums_mult = 1;
  let zero_count = 0;

  for (let num of nums) {
    if (num !== 0) {
      nums_mult *= num;
    } else {
      zero_count++;
    }
  }

  if (zero_count > 1) {
    return new Array(nums.length).fill(0);
  }

  for (let i = 0; i < nums.length; i++) {
    let num;
    if (nums[i] === 0) {
      num = nums_mult;
    } else if (zero_count === 1) {
      num = 0;
    } else {
      num = nums_mult / nums[i];
    }
    nums[i] = num;
  }

  return nums;
};
