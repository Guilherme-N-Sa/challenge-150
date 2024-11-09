/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  function bfs(node1, node2) {
    if (node1 === null && node2 === null) return true;
    if (node1?.val !== node2?.val) return false;

    let left_equal = bfs(node1.left, node2.left);
    let right_equal = bfs(node1.right, node2.right);

    return left_equal && right_equal;
  }

  return bfs(p, q);
};
