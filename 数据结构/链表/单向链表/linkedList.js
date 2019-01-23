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

  // 找到val===item的节点之前的节点
  findPrevNode(item) {
    let currentNode = this.startNode;
    while (currentNode) {
      // 如果有节点的val相同。那么就失败了
      if(currentNode.next && currentNode.next.val === item) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }

  // 删除节点
  remove(item) {
    const prevNode = this.findPrevNode(item);
    if (prevNode && prevNode.next) {
      prevNode.next = prevNode.next.next;
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

  // 删除最后一个节点
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
