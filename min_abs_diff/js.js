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
var getMinimumDifference = function (root) {
  let prev = null;
  let min = Infinity;

  const inOrderTraverse = (node) => {
    if (!node) return;
    inOrderTraverse(node.left);

    if (prev !== null) {
      min = Math.min(min, node.val - prev);
    }
    prev = node.val;

    inOrderTraverse(node.right);
  };

  inOrderTraverse(root);
  return min;
};
