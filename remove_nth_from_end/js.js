/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  function removeEnd(node, prev = null) {
    if (!node) return 0;

    let nth_end = removeEnd(node.next, node) + 1;
    if (nth_end === n) {
      if (!prev) {
        head = node.next;
      } else {
        prev.next = node.next;
      }
    }
    return nth_end;
  }

  removeEnd(head);
  return head;
};
