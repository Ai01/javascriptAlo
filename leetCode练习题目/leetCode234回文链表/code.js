// 反转整个链表
const reverseList = (head) => {
  if (!head || !head.next) return head;
  var next = reverseList(head.next);

  // 一种对链表如何递归的展示。改变next指向的方法
  head.next.next = head;
  head.next = null;
  return next;
}


var isPalindrome = function(head) {
  let a = head;
  let num1 = '';
  while(a) {
    num1 += a.val;
    a = a.next;
  }

  let b = reverseList(head);
  let num2 = '';
  while(b) {
    num2 += b.val;
    b = b.next;
  }

  return num1 === num2;
};

// 反转半个链表
var isPalindrome2 = function(head) {
  let length = 0;
  for(let a = head; a; a = a.next, length += 1);

  if(length === 1) return true;

  let prev = null;
  let cur = head;
  for(let i = 0; i < Math.floor(length/2); i++) {
    const next = cur.next;
    cur.next = prev;

    prev = cur;
    cur = next;
  }

  if(length % 2 === 1) cur = cur.next;

  console.log(cur, prev, length);
  for(;prev && cur;prev=prev.next, cur=cur.next) {
    if(prev.val !== cur.val) return false;
  }
  return true;
};

const test = {
  val: 1,
  next: {
    val: 0,
    next: {
      val: 0,
    }
  }
}


console.log(isPalindrome2(test));
