var removeElements = function(head, val) {
  let dummy = { val: 'dummy', next: head };
  let prev = dummy;
  let now = prev ? prev.next : null;

  while(prev) {
    if(now && now.val === val) {
      prev.next = now.next;
    } else {
      prev = prev.next;
    }

    now = prev ? prev.next : null;
  }

  return dummy.next;
};
