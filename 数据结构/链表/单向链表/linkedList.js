// 链表
class Node {
  constructor(val, next) {
    this._id = Math.random()
      .toString(36)
      .substr(2);
    this.val = val;
    this.next = next || null;
  }

  getId() {
    return this._id;
  }
}

class LinkedList {
  constructor(val) {
    this.startNode = val ? new Node(val) : null;
  }

  // 查找节点
  find(id) {
    let currentNode = this.startNode;
    while (currentNode) {
      // 如果有节点的val相同。那么就失败了
      if (typeof currentNode.getId === 'function' && currentNode.getId() === id) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }

  // 插入节点
  // 没有上一个节点的标示的时候，插入最后
  insert(newVal, parentId) {
    const newNode = new Node(newVal);
    if (parentId) {
      const current = this.find(parentId);
      if (current) {
        newNode.next = current.next;
        current.next = newNode;
      }
    } else {
      const lastNode = this.getLastNode();
      if (lastNode) {
        lastNode.next = newNode;
      } else {
        this.startNode = newNode;
      }
    }

    return newNode;
  }

  // 找到val===item的节点之前的节点
  findPrevNode(id) {
    let currentNode = this.startNode;
    while (currentNode) {
      // 如果有节点的val相同。那么就失败了
      if (currentNode.next && typeof currentNode.next.getId === 'function' && currentNode.next.getId() === id) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }

  // 删除节点
  remove(id) {
    const prevNode = this.findPrevNode(id);
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
    while (currentNode && currentNode.next) {
      prev = currentNode;
      currentNode = currentNode.next;
    }

    if (prev) {
      prev.next = null;
    } else {
      this.startNode = null;
    }
  }
}

module.exports = LinkedList;
