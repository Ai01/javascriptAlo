// 队列的基本测试

const underline = () => {
  console.log('---------------------');
};

const Queue = require('./queue');

console.log('constructor测试');
const queue = new Queue([1, 2, 3]);
console.log(queue);

underline();

console.log('enterQueue测试');
console.log(queue);
queue.push(5);
console.log(queue);

underline();

console.log('length测试');
console.log(queue);
console.log(queue.length());

underline();

console.log('peek测试');
console.log(queue);
console.log('index为1的元素', queue.peek(1));
console.log('index为2的元素', queue.peek(2));

underline();

console.log('outQueue测试');
console.log(queue);
queue.pop();
console.log(queue);

underline();

console.log('front测试');
console.log(queue);
console.log('front', queue.front());

underline();

console.log('clear测试');
queue.clear();
console.log(queue);
