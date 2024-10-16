/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let hash_table = new Map();
  for (let i = 0; i < numbers.length; i++) {
    if (hash_table.has(numbers[i])) {
      return [hash_table.get(numbers[i]) + 1, i + 1];
    }
    let diff = target - numbers[i];
    hash_table.set(diff, i);
  }
  return -1;
};
