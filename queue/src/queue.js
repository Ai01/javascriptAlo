class Queue {
  constructor(array) {
    this.data = [];
    if (array) {
      this.data = [].concat(array);
    }
  }

  peek(index) {
    if (index > this.data.length) {
      throw new Error(`${index}大于队列的长度${this.data.length}`);
    }
    return this.data[index];
  }

  length() {
    return this.data.length;
  }

  front() {
    if (!this.data.length) {
      throw new Error('对列为空');
    }
    return this.data[0];
  }

  enterQueue(element) {
    this.data.push(element);
  }

  outQueue() {
    return this.data.shift();
  }

  clear() {
    this.data = [];
  }
}

module.exports = Queue;
