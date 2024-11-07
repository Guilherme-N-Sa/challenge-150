/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  function traverse(arr) {
    if (arr.length === 0) return null;
    let middle = Math.floor(arr.length / 2);
    let node = new TreeNode(arr[middle]);
    let left_node = traverse(arr.slice(0, middle));
    let right_node = traverse(arr.slice(middle + 1, arr.length));

    node.left = left_node;
    node.right = right_node;

    return node;
  }

  let root_node = traverse(nums);

  return root_node;
};
