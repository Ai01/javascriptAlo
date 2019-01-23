const LinkedList = require('../../数据结构/链表/单向链表/linkedList');
const Stack = require('../../数据结构/栈/src/stack');
const { consoleTree } = require('../../utils/consoleUtils');

// 利用两个栈来实现
class MinStack {
  constructor() {
    this.dataStack = new Stack();
    this.minStack = new Stack();
  }

  push(e) {
    // 数据栈直接入
    this.dataStack.push(e);
    // 最小值栈
    if (this.minStack.length() === 0) {
      this.minStack.push(e);
    } else {
      if (e <= this.minStack.top()) {
        this.minStack.push(e);
      }
    }
  }

  pop() {
    if (this.dataStack.top() === this.minStack.top()) {
      this.minStack.pop();
    }

    return this.dataStack.pop();
  }

  top() {
    return this.dataStack.top();
  }

  getMin() {
    return this.minStack.top();
  }
}

// 利用链表实现
class MinStack2 {
  constructor() {
    this.linkedList = new LinkedList(Infinity);
    this.min = Infinity;
  }

  push(e) {
    if (typeof this.min !== 'number') {
      this.min = e;
    }
    if (e <= this.min) {
      this.linkedList.insert(this.min);
      this.min = e;
    }

    this.linkedList.insert(e);
  }

  pop() {
    const head = this.linkedList.getLastNode();
    this.linkedList.removeLastNode();
    if (head && head.val === this.min) {
      this.min = this.linkedList.getLastNode().val;
      this.linkedList.removeLastNode();
    }
    return head.val;
  }

  top() {
    return this.linkedList.getLastNode().val;
  }

  getMin() {
    return this.min;
  }
}

var a = new MinStack2();
a.push(6);
a.push(6);
a.push(7);
a.top();
a.pop();
// a.getMin();
a.pop();
// a.getMin();
a.pop();
// a.push(7);
consoleTree(a);
// a.top();
// a.getMin();
// a.push(-8);
// a.top();
// a.getMin();
// a.pop();
// a.getMin();
// consoleTree(a);
