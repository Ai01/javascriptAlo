// 双向链表

class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next || null;
    this.prev = prev || null;
  }
}

class DoubleList {
  constructor() {
    this.head = new Node('head');
    this.tail = this.head;
  }

  find(value) {
    let currentNode = this.head;
    while (currentNode && currentNode.next && currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  insert(value, prevValue) {
    const newNode = new Node(value);
    const prevNode = this.find(prevValue);

    if (prevNode && !prevNode.next) {
      // 如果前一个节点是尾节点
      this.tail = newNode;
    }

    newNode.next = prevNode.next;
    prevNode.next = newNode;
    newNode.prev = prevNode;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  remove(value) {
    const node = this.find(value);
    const prevNode = node.prev;

    if (!node) {
      return null;
    }

    if (node.next !== null) {
      node.next.prev = prevNode;
      prevNode.next = node.next;
    } else {
      // 如果删除的是最后的节点需要改变tail
      prevNode.next = null;
      this.tail = prevNode;
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
