/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let head = { val: 0, next: null };

  let temp = head;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    let x = l1?.val ?? 0;
    let y = l2?.val ?? 0;

    let sum = x + y + carry;

    carry = sum > 9 ? 1 : 0;

    temp.next = {
      val: sum % 10,
      next: null,
    };

    temp = temp.next;
    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
  }
  return head.next;
}