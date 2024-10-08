/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let gas_tank = 0

  for (let num of nums) {
      if (gas_tank < 0) {
          return false
      } else if (gas_tank < num) {
          gas_tank = num
      }
      gas_tank--
  }

  return true
};