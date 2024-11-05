/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) return false;

  let node = head;
  let i = 0;
  while (node.next) {
    if (node.pos) {
      return true;
    }

    node.pos = i;
    i++;
    node = node.next;
  }
  return false;
};
