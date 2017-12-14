// 双向队列

class Deque {
  constructor(array) {
    this.data = [];
    if (Array.isArray(array)) {
      this.data = [].concat(array);
    }
  }

  addFirst(e) {
    this.data.unshift(e);
  }

  removeFirst() {
    return this.data.shift();
  }

  getFirst() {
    return this.data[0];
  }

  addLast(e) {
    this.data.push(e);
  }

  removeLast() {
    return this.data.pop();
  }

  getLast() {
    return this.data[this.data.length - 1];
  }

  length() {
    return this.data.length;
  }

  clear() {
    this.data = [];
  }

  peek(i) {
    return this.data[i];
  }
}

module.exports = Deque;
