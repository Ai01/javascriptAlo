// 链表

class Node {
  constructor(element, next) {
    this.element = element;
    this.next = next || null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head');
  }

  find(item) {
    let currentNode = this.head;
    while (currentNode.next && currentNode.element !== item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  insert(newElement, item) {
    const newNode = new Node(newElement);
    const current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
  }

  _findPrevNode(item) {
    let currentNode = this.head;
    while (currentNode !== null && currentNode.next.element !== item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  remove(item) {
    const prevNode = this._findPrevNode(item);
    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
    }
  }
}

module.exports = LinkedList;
