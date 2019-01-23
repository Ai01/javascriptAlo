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

  find(item) {
    let currentNode = this.startNode;
    while (currentNode) {
      if(currentNode.val === item) return currentNode;
      currentNode = currentNode.next;
    }
  }

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

  findPrevNode(item) {
    let currentNode = this.startNode;
    while (currentNode) {
      if(currentNode.next && currentNode.next.val === item) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }

  remove(item) {
    // 如果有节点的val相同。那么就失败了
    const prevNode = this.findPrevNode(item);
    if (prevNode && prevNode.next) {
      prevNode.next = prevNode.next.next;
    }
  }

  getLastNode() {
    let currentNode = this.startNode;
    while (currentNode && currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  removeLastNode() {
    let currentNode = this.startNode;
    let prev = null;
    while(currentNode && currentNode.next) {
      prev = currentNode;
      currentNode = currentNode.next;
    }

    if(prev) {
      prev.next = null;
    } else {
      this.startNode = null;
    }
  }
}

module.exports = LinkedList;
