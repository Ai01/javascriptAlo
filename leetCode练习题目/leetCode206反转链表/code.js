// 迭代
var reverseList = function(head) {
  if(!head) return null;

  let current = head;
  let prev = null;

  while(current) {
    let next = current.next;
    current.next = prev;

    prev = current;
    current = next;
  }

  return prev;
};

// 递归
const reverseList2 = (head) => {
  if (!head || !head.next) return head;
  var next = reverseList2(head.next);
  console.log(next, head);
  head.next.next = head;
  head.next = null;
  return next;
}

var list = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next : {
        val: 4,
        next: {
          val: 5
        }
      }
    }
  }
};

// reverseList(list);
reverseList2(list);
