/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  function merge(n1, n2, node = null) {
    let next_node;
    if (n1 === null && n2 === null) {
      return;
    } else if (n1 === null) {
      next_node = n2;
      n2 = n2.next;
    } else if (n2 === null || n1.val < n2.val) {
      next_node = n1;
      n1 = n1.next;
    } else {
      next_node = n2;
      n2 = n2.next;
    }
    if (node) {
      node.next = next_node;
    }

    merge(n1, n2, next_node);

    return next_node;
  }
  node = merge(list1, list2);
  return node || list1;
};
