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
console.log('insert测试');
const newNode = llist.insert(1);
const nextNode = llist.insert(2, newNode.getId());
consoleTree(llist);
//
// underline();
//
// console.log('remove测试');
// llist.remove(1);
// console.log(llist);
//

console.log('find测试');
console.log(llist.find(nextNode.getId()));

consoleTree(llist);
