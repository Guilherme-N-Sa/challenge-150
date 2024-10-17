/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;

  let max_volume = 0;
  while (left < right) {
    let current = Math.min(height[left], height[right]) * (right - left);

    max_volume = Math.max(max_volume, current);

    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }

  return max_volume;
};
