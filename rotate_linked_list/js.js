/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next || k === 0) return head;

  let len = 1;
  let tail = head;

  while (tail.next) {
    len++;
    tail = tail.next;
  }
  tail.next = head;

  k = k % len;

  let i = 0;
  let node = head;
  let prev = undefined;

  while (i <= len - k) {
    if (i === len - k) {
      prev.next = null;
      return node;
    }
    prev = node;
    node = node.next;
    i++;
  }
};