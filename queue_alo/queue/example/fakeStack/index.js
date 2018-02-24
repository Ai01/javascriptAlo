// 用两个队列实现一个栈

/*
*
* 基本思路：
* 将两个队列的其中一个保持为空，当push的时候向非空的队列添加
* 当pop的时候，将非空队列的length-1个弹出到空队列，将最后一个元素pop出去
*
* */

const Queue = require('../../src/queue');

class FakeStack {
  constructor() {
    this.queueOne = new Queue();
    this.queueTwo = new Queue();
  }

  push(e) {
    const lengthFoQueueOne = this.queueOne.length();
    const lengthForQueueTwo = this.queueTwo.length();
    if (lengthFoQueueOne === 0 && lengthForQueueTwo === 0) {
      this.queueOne.push(e);
      return;
    }
    if (lengthFoQueueOne === 0 && lengthForQueueTwo !== 0) {
      this.queueTwo.push(e);
      return;
    }
    if (lengthForQueueTwo === 0 && lengthFoQueueOne !== 0) {
      this.queueOne.push(e);
      return;
    }
    throw new Error('两个队列都不为空');
  }

  pop() {
    let acceptQueue;
    let outPutQueue;
    if (this.queueOne.length() === 0) {
      acceptQueue = this.queueOne;
      outPutQueue = this.queueTwo;
    }
    if (this.queueTwo.length() === 0) {
      acceptQueue = this.queueTwo;
      outPutQueue = this.queueOne;
    }
    const _startTimeLength = outPutQueue.length();
    for (let i = 0; i < _startTimeLength - 1; i += 1) {
      acceptQueue.push(outPutQueue.pop());
    }
    return outPutQueue.pop();
  }
}

// test
const fakeStack = new FakeStack();

console.log('push测试');
console.log(fakeStack);
fakeStack.push(1);
fakeStack.push(2);
fakeStack.push(3);
fakeStack.push(4);
fakeStack.push(5);
console.log(fakeStack);

console.log('=================');

console.log('pop测试');
console.log(fakeStack);
console.log(fakeStack.pop());
console.log(fakeStack);

console.log('=================');

console.log('push测试');
console.log(fakeStack);
fakeStack.push(1);
fakeStack.push(2);
fakeStack.push(3);
fakeStack.push(4);
fakeStack.push(5);
console.log(fakeStack);

console.log('=================');

console.log('pop测试');
console.log(fakeStack);
console.log(fakeStack.pop());
console.log(fakeStack.pop());
console.log(fakeStack);

