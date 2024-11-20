/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  function dfs_sum(node, sum = 0, c = 0) {
    if (!node) return false;

    sum += node.val;

    if (!node.left && !node.right) {
      return sum === targetSum;
    }

    let left = dfs_sum(node.left, sum);
    let right = dfs_sum(node.right, sum);

    return left || right;
  }

  return dfs_sum(root);
};
