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
 * @return {number}
 */
var maxDepth = function (root) {
  function findDepth(node) {
    if (!node) return 0;

    let maxDepth = Math.max(findDepth(node.left), findDepth(node.right));

    return maxDepth + 1;
  }

  return findDepth(root);
};
