/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length <= 1) return 0;
  let i = 0;
  let current_jump = nums[0];
  let count = 1;

  while (i + current_jump < nums.length - 1) {
    let next_biggest_jump = 0;
    let next_biggest_jump_index;

    for (let jump = 1; jump <= current_jump; jump++) {
      if (next_biggest_jump <= nums[i + jump] + jump) {
        next_biggest_jump = nums[i + jump] + jump;
        next_biggest_jump_index = i + jump;
      }
    }

    i = next_biggest_jump_index;
    current_jump = nums[i];
    count++;
  }

  return count;
};
