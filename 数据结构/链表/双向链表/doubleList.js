// 双向链表

class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next || null;
    this.prev = prev || null;
  }
}

class DoubleList {
  constructor(headValue) {
    if (!headValue) {
      this.head = null;
    } else {
      this.head = new Node(headValue);
    }
  }

  find(value) {
    let currentNode = this.head;
    while (currentNode && currentNode.next && currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  // 插入节点
  insert(value, prevValue) {
    const newNode = new Node(value);

    if (!prevValue) {
      // 如果不指定前面的节点。那么插入尾节点
      const tail = this.getTail();
      tail.next = newNode;
      return;
    }

    const prevNode = this.find(prevValue);
    if (prevNode) {
      newNode.next = prevNode.next;
      prevNode.next = newNode;
      newNode.prev = prevNode;
    }
  }

  // 获取尾节点
  getTail() {
    let currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  // 插入头部
  insertHead(value) {
    if (!this.head) {
      // 如果没有头节点
      this.head = new Node(value);
    } else {
      // 如果有头节点
      const newHead = new Node(value);

      this.head.prev = newHead;
      newHead.next = this.head;

      this.head = newHead;
    }
  }

  // 改变head
  changeHead(value) {
    const nodeNeedToChange = this.find(value);
    if (nodeNeedToChange && nodeNeedToChange.prev) {
      this.remove(value);

      this.head.prev = nodeNeedToChange;
      nodeNeedToChange.next = this.head;

      this.head = nodeNeedToChange;
    }
  }


  remove(value) {
    const node = this.find(value);
    const prevNode = node.prev;

    // 如果没有node
    if (!node) {
      return null;
    }

    // 如果没prevNode。那就是头节点
    if (!prevNode && this.head) {
      if(!this.head.next) {
        // 如果只有head
        this.head = null;
        return;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
    } else if(!node.next && prevNode) {
      // 删除尾节点
      prevNode.next = null;
    } else {
      node.next.prev = prevNode;
      prevNode.next = node.next;
    }
  }

  show() {
    let currentNode = this.head;

    const res = [];
    while (currentNode && currentNode.value) {
      res.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return res.join(',');
  }
}

module.exports = DoubleList;
