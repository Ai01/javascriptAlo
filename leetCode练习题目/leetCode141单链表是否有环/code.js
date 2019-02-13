var hasCycle = function(head) {
  if (head === null || head.next === null) return false;

  var slow = head;
  var fast = head.next;

  while (fast !== slow) {
    if (fast.next === null || fast.next.next === null) {
      return false;
    }

    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};
