// 优先队列测试

const underline = () => {
  console.log('---------------------');
};

const PriorityQueue = require('./priorityQueue');

console.log('constructor测试');
const queue = new PriorityQueue([
  { data: 1, level: 0 },
  { data: 2, level: 2 },
  { data: 3, level: 1 },
]);
console.log(queue);

underline();

console.log('enterQueue测试');
queue.push({ data: 5, level: 4 });
console.log(queue);

underline();

console.log('length测试');
console.log(queue.length());

underline();

console.log('peek测试');
console.log('index为1的元素', queue.peek(1));
console.log('index为2的元素', queue.peek(2));

underline();

console.log('outQueue测试');
queue.pop();
console.log(queue);

underline();

console.log('front测试');
console.log('front', queue.front());

underline();

console.log('clear测试');
queue.clear();
console.log(queue);
