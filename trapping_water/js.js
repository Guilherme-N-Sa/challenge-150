/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let [max_left, max_right] = [height[left], height[right]];
  let water = 0;

  while (left <= right) {
    if (height[left] < height[right]) {
      max_left = Math.max(max_left, height[left]);
      water += max_left - height[left];
      left++;
    } else {
      max_right = Math.max(max_right, height[right]);
      water += max_right - height[right];
      right--;
    }
  }

  return water;
};
