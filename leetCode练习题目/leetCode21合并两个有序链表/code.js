var mergeTwoLists = function(l1, l2) {
  let p = new ListNode();
  let a = p;

  while(l1 && l2) {
    if(l1.val < l2.val) {
      p.next = l1;
      l1 = l1.next;
    } else {
      p.next = l2;
      l2 = l2.next;
    }
    p =  p.next;
  }
  if(!l1) p.next = l2;
  if(!l2) p.next = l1;
  return a.next;
};
