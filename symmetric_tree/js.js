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
 * @return {boolean}
 */
var isSymmetric = function (root) {

  function verifySim(node_l, node_r) {
      if (node_l === node_r && node_r === null) {
          return true
      }
      if (node_l === null || node_r === null) {
          return false
      }
      if (node_l.val !== node_r.val) {
          return false
      } else {
          return verifySim(node_l.left, node_r.right) && verifySim(node_l.right, node_r.left)
      }
  }

  return verifySim(root.left, root.right)
};