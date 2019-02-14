
const getLinkedListLength = (list) => {
  let len = 0;
  while(list) {
    list = list.next;
    len += 1;
  }

  return len;
}

// 方法2
const getIntersectionNode = function(headA, headB) {
  const p = getLinkedListLength(headA);
  const q = getLinkedListLength(headB)

  let e = headA;
  let f = headB;

  if(p>q) {
    let dis = p - q;
    while(dis > 0) {
      e = e.next;
      dis -= 1;
    }
  } else {
    let dis = q - p;
    while(dis > 0) {
      f = f.next;
      dis -= 1;
    }
  }

  while(e !== f) {
    e = e.next;
    f = f.next;
  }

  return e;
};

// 方法3
const getIntersectionNode2 = function(headA, headB) {
  let e = headA;
  let f = headB;

  while(e !== f) {
    if(e) {
      e = e.next;
    } else {
      e = headB;
    }

    if(f) {
      f = f.next;
    } else {
      f = headA;
    }

  }

  return e;
};
