// 优先队列

class PriorityQueue {
  constructor(array) {
    this.data = [];
    if (Array.isArray(array)) {
      this.data = [].concat(array);
    }
  }

  push(e) {
    this.data.push(e);
  }

  pop() {
    let e = null;
    let index = null;
    for (let i = 0; i < this.data.length; i += 1) {
      const tmp = this.data[i];
      if (!e) {
        e = tmp;
        index = i;
      }
      if (e && tmp.level > e.level) {
        e = tmp;
        index = i;
      }
    }
    return this.data.splice(index, 1);
  }

  length() {
    return this.data.length;
  }

  front() {
    let e = null;
    let index = null;
    for (let i = 0; i < this.data.length; i += 1) {
      const tmp = this.data[i];
      if (!e) {
        e = tmp;
        index = i;
      }
      if (e && tmp.level > e.level) {
        e = tmp;
        index = i;
      }
    }
    return this.data[index];
  }

  peek(i) {
    return this.data[i];
  }

  clear() {
    this.data = [];
  }
}

module.exports = PriorityQueue;
