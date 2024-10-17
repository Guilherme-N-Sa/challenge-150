/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let triplets = [];
  for (let i = 0; i < nums.length; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let aux = nums[i] + nums[j] + nums[k];

      if (aux === 0) {
        triplets.push([nums[i], nums[j], nums[k]]);
        k--;
        j++;

        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      } else if (aux > 0) {
        k--;
      } else {
        j++;
      }
    }
  }

  return triplets;
};
