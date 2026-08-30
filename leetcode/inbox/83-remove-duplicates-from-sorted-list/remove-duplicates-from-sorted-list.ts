function deleteDuplicates(head: ListNode | null): ListNode | null {
  let temp = head;
  let iter = temp?.next ?? null;

  while (iter != null) {
    while (temp.val === iter.val) {
      iter = iter.next;
      if (iter === null) {
        temp.next = iter;
        return head;
      }
    }
    temp.next = iter;
    temp = iter;
    iter = iter.next;
  }

  return head;
}
