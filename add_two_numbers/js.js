/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let node = new ListNode(0);
  let head = node;
  let carry = 0;
  while (l2 || l1 || carry !== 0) {
    let l1_val = l1 ? l1.val : 0;
    let l2_val = l2 ? l2.val : 0;
    let newVal = (l1_val + l2_val + carry) % 10;
    carry = Math.floor((l1_val + l2_val + carry) / 10);

    node.next = new ListNode(newVal);
    node = node.next;

    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }

  return head.next;
};
