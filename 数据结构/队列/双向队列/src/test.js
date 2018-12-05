// deque测试

const Deque = require('./deque');

const underline = () => {
  console.log('---------------------');
};

console.log('constructor测试:');
const deque = new Deque([4, 1, 2]);
console.log(deque);

underline();

console.log('addFirst测试');
deque.addFirst(5);
console.log(deque);

underline();

console.log('removeFirst测试');
deque.removeFirst();
console.log(deque);

underline();

console.log('getFirst测试');
console.log(deque.getFirst());

underline();

console.log('addLast测试');
deque.addLast(8);
console.log(deque);

underline();

console.log('removeLast测试');
deque.removeLast();
console.log(deque);

underline();

console.log('getLast测试');
console.log(deque.getLast());

underline();

console.log('peek测试');
console.log(deque.peek(2));

underline();

console.log('length测试');
console.log(deque.length());

underline();

console.log('clear测试');
deque.clear();
console.log(deque);
