// // 链表测试
//
// const underline = () => {
//   console.log('---------------------');
// };
//
const LinkedList = require('./linkedList');
const { consoleTree } = require('../../../utils/consoleUtils');

const llist = new LinkedList();
//
// console.log('constructor测试');
// console.log(llist);
//
// underline();
//
// console.log('insert测试');
// llist.insert(1);
// llist.insert(2, 1);
// console.log(llist);
//
// underline();
//
// console.log('remove测试');
// llist.remove(1);
// console.log(llist);
//
// underline();
//
// console.log('find测试');
// console.log(llist.find(2));


llist.insert(-2);
llist.insert(0);
llist.insert(-3);

consoleTree(llist);

llist.removeLastNode();

consoleTree(llist);
