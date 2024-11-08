/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let nums_set = new Set(nums);
  let biggest_seq = 0;
  for (let num of nums) {
    if (nums_set.has(num - 1)) {
      continue;
    }

    let next = num + 1;
    let current_seq = 1;
    while (nums_set.has(next)) {
      next++;
      current_seq++;
    }
    biggest_seq = Math.max(biggest_seq, current_seq);
  }

  return biggest_seq;
};
