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

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  let finalNode: ListNode = { val: -1, next: null };

  let temp1 = list1;
  let temp2 = list2;
  let temp3 = finalNode;

  while (temp1 != null && temp2 !== null) {
    if (temp1.val <= temp2.val) {
      temp3.next = temp1;
      temp1 = temp1.next;
    } else {
      temp3.next = temp2;
      temp2 = temp2.next;
    }

    temp3 = temp3.next;
  }

  if (temp1 != null) {
    temp3.next = temp1;
  } else {
    temp3.next = temp2;
  }
  return finalNode.next;
}