/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = 2; // k is the index of the last element of the new array
  for (let i = 2; i < nums.length; i++) {
    // if the current element is different from the last element validated two positions before
    if (nums[i] !== nums[k - 2]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};
