/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let candidate = null;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += candidate === num ? 1 : -1;
  }

  return candidate;
};
