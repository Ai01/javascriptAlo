class Stack {
  constructor(array) {
    this.data = [];
    if (array) {
      // 不再这里维护length，避免代码写的复杂
      this.data = [].concat(array);
    }
  }

  push(e) {
    this.data.push(e);
  }

  pop() {
    const _res = this.data.pop();
    return _res;
  }

  peek(index) {
    return this.data[index];
  }

  length() {
    return this.data.length;
  }

  top() {
    return this.data[this.data.length - 1];
  }

  clear() {
    this.data = [];
  }
}

module.exports = Stack;
