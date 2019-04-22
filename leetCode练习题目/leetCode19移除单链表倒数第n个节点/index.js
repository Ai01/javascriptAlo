const { consoleTree } = require('../../utils/consoleUtils');

var removeNthFromEnd = function(head, n) {
  const dummy = { next: head, val: 'dummy' };

  let q = dummy;
  let p = dummy;

  let i = n;
  while (i > 0) {
    q = q.next;
    i -= 1;
  }

  // 如果n大于链表长度
  if(!q) return head;

  // 同时向前移动直到q到达尾部。
  while (q && q.next) {
    q = q.next;
    p = p.next;
  }
  p.next = p.next.next;

  return dummy.next;
};

consoleTree(removeNthFromEnd({ val: 1 }, 1));
