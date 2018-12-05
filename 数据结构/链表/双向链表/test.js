// 链表测试

const underline = () => {
  console.log('---------------------');
};

const DoubleList = require('./doubleList');

const list = new DoubleList();

console.log('constructor测试');
console.log(list.show());

underline();

console.log('insert测试');
list.insert(1);
list.insert(2, 1);
console.log(list.show());

underline();

console.log('remove测试');
list.remove(1);
console.log(list.show());

underline();

console.log('find测试');
console.log(list.find(2));
