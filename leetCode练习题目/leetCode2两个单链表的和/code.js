// 链表
class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next || null;
  }
}

class LinkedList {
  constructor(val) {
    this.startNode = val ? new Node(val) : null;
  }

  // 查找节点
  find(item) {
    let currentNode = this.startNode;
    while (currentNode) {
      // 如果有节点的val相同。那么就失败了
      if(currentNode.val === item) return currentNode;
      currentNode = currentNode.next;
    }
  }

  // 插入节点
  insert(newVal, item) {
    const newNode = new Node(newVal);
    if(item) {
      const current = this.find(item);
      if(current) {
        newNode.next = current.next;
        current.next = newNode;
      }
    } else {
      const lastNode = this.getLastNode();
      if(lastNode) {
        lastNode.next = newNode;
      } else {
        this.startNode = newNode;
      }
    }

  }

  // 获取最后一个节点
  getLastNode() {
    let currentNode = this.startNode;
    while (currentNode && currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

}


var addTwoNumbers = function(l1, l2) {
  let carry = 0;
  let res = new LinkedList();

  while(l1 || l2) {
    let tmp = 0;

    let sum = 0;
    if(l1 && l2) sum = l1.val + l2.val;
    if(l1 && !l2 ) sum = l1.val;
    if(l2 && !l1) sum = l2.val;

    sum += carry;
    if(sum >= 10) {
      tmp = sum % 10;
      carry = Math.floor(sum/10);
    } else {
      tmp = sum;
      carry = 0;
    }

    res.insert(tmp)

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  if(carry) {
    res.insert(carry);
  }

  console.log(res.startNode);
  return res.startNode;
};


addTwoNumbers({ val: 1 }, { val: 9, next: { val: 9 } });
